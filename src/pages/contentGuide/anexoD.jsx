import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";

// Estructura de datos inicial para el Anexo D
const initialState = {
  infraestructura: {
    mobiliarioAdaptado: [],
    espacioLibreEstimulos: [],
    espacioFisicoAdaptado: [],
    sanitariosAccesibles: [],
    senaleticaCognitiva: [],
  },
  comunicacion: {
    vocabularioFacil: [],
    frasesSimples: [],
    documentosLenguajeClaro: [],
    preguntasBreves: [],
    informaResuelveDudas: [],
    relacionAcordeDesarrollo: [],
  },
  dinamica: {
    familiarizacionPrevia: [],
    continuidadPersonal: [],
    horarioAdecuado: [],
    cambioDia: [],
    salaPrivada: [],
    descansos: [],
  },
  observaciones: ""
};

// Objeto con las descripciones para renderizar la tabla dinámicamente
const apoyosDescripcion = {
  infraestructura: [
    { key: 'mobiliarioAdaptado', categoria: 'Mobiliario adaptado', items: ['Sillas que corresponden a las necesidades de altura y espacio.', 'Mesas que corresponden a las necesidades de altura y espacio.'] },
    { key: 'espacioLibreEstimulos', categoria: 'Espacio libre de estimulos', items: ['Generar un espacio libre de objetos: expedientes, libros, fotografías, recipientes, etc.', 'Espacio libre de estímulos sensoriales auditivos: música, ruidos, conversaciones en tono elevado.', 'Espacio libre de estímulos sensoriales visuales: fotografías, videos, vestimenta formal o llamativa, etc.', 'Espacio libre de estímulos sensoriales olfativos: alimentos, perfumes fuertes, etc.'] },
    { key: 'espacioFisicoAdaptado', categoria: 'Espacio físico adaptado', items: ['Espacio físico que considera un lugar de juego', 'Espacio físico que considera el tránsito libre de las personas', 'Espacio físico que facilita la lectura de las expresiones faciales por medio de la posición de los lugares frente a frente.'] },
    { key: 'sanitariosAccesibles', categoria: 'Sanitarios accesibles', items: ['Los espacios sanitarios contemplan una señalización visible', 'Los espacios sanitarios contemplan la distribución de espacio amplio para el acceso de las sillas de ruedas.', 'Los espacios sanitarios contemplan tener la puerta, inodoro, lavamanos, espejo, accesorios y urinales adaptados a las medidas de las niñas, niños y adolescentes'] },
    { key: 'senaleticaCognitiva', categoria: 'Señalética con accesibilidad cognitiva', items: ['La señalética que se emplea en la dependencia utiliza imágenes universales y sencillas que informan de forma clara los lugares principales en los que estará en contacto las niñas, niños y adolescentes durante su participación.', 'Los espacios principales para contemplar la señalética son la entrada, sala de espera, sala de entrevista, sanitarios, salida.'] },
  ],
  comunicacion: [
    { key: 'vocabularioFacil', categoria: 'Frases claras y cortas con vocabulario fácil de comprender', items: ['Palabras concretas y en positivo;', 'Verbos en presente y formulados en voz activa;', 'Palabras apropiadas y fáciles de entender;', 'Tecnicismos o extrañas se evitan, o en su caso se explican;', 'El lenguaje sexista y racista se evita.'] },
    { key: 'frasesSimples', categoria: 'Frases claras y cortas con vocabulario fácil de comprender', items: ['Estructura simple: sujeto, verbo, complemento y predicado;', 'Frases con una idea principal; y', 'Emplear menos de 20 palabras.'] },
    { key: 'documentosLenguajeClaro', categoria: 'Documentos de lectura con lenguaje claro y simple', items: ['Un tema principal por párrafo;', 'Las frases se relacionan entre sí;', 'Utiliza conectores entre las frases y párrafos; y', 'Tono de redacción amistoso y cálido.'] },
    { key: 'preguntasBreves', categoria: 'Preguntas breves y sencillas', items: ['Las preguntas exploratorias que se empleen con las niñas, niños y adolescentes se basan en protocolos estandarizados y especializados para la recuperación de relatos.'] },
    { key: 'informaResuelveDudas', categoria: 'Informa y resuelve dudas', items: ['Las niñas, niños y adolescentes reciben información sobre el objetivo de la diligencia, quiénes estarán presentes, el papel que desempeñan las personas presentes, lo que sucederá durante la diligencia, las características de cómo es el lugar y lo esperado de su parte.', 'Las niñas, niños y adolescentes reciben información sobre las decisiones que se tomen y les involucren.', 'A las niñas, niños y adolescentes se les pregunta si tienen alguna duda sobre la situación o información brindada.', 'A las niñas, niños y adolescentes se les informa que pueden expresar las dudas que sean necesarias en cualquier momento.'] },
    { key: 'relacionAcordeDesarrollo', categoria: 'Relacionarse acorde a su desarrollo, gustos e intereses', items: ['La forma de comunicarse con las niñas, niños y adolescentes es construida a partir de su desarrollo, gustos e intereses personales (actividades recreativas, música, programas, películas, etc.).', 'La manera de comunicarse con las niñas, niños y adolescentes evita centrarse en características físicas (estatura o apariencia), condiciones de salud o discapacidad.'] },
  ],
  dinamica: [
    { key: 'familiarizacionPrevia', categoria: 'Familiarización previa con el espacio de participación', items: ['Los espacios y las personas que estarán presentes en la diligencia en la que participarán las niñas, niños y adolescentes son presentados por el personal con anticipación de forma física o por medio de materiales visuales (puede utilizar la plataforma de Tribunales Amigables).'] },
    { key: 'continuidadPersonal', categoria: 'Continuidad con el mismo personal', items: ['Se procura que el personal que tuvo el primer contacto con las niñas, niños o adolescentes, es quien les acompaña a las diligencias en las que se requiera su participación.'] },
    { key: 'horarioAdecuado', categoria: 'Horario adecuado', items: ['Los horarios para programar una diligencia con las niñas, niños o adolescentes evitan aquellos horarios que involucran la atención a necesidades básicas, como lo es la alimentación y el descanso.'] },
    { key: 'cambioDia', categoria: 'Cambio de día', items: ['Si la diligencia se programa en horarios nocturnos; si se encuentra emocionalmente indispuesta; si se encuentra enferma; si requiere mayor tiempo para prepararse emocionalmente para participar en la diligencia, etc.; y', 'También es importante considerar cambiar el día de la diligencia cuando existan conductas de agresividad hacia sí misma u otras personas, así como ante la sospecha de estar en efectos por el consumo de sustancias tóxicas.'] },
    { key: 'salaPrivada', categoria: 'Sala privada', items: ['La participación de las niñas, niños o adolescentes en una entrevista se realiza en una habitación privada.', 'En caso de no contar con un espacio privado, la entrevista se realiza cuando no se encuentren otras diligencias simultáneas.'] },
    { key: 'descansos', categoria: 'Descansos', items: ['Informar antes de iniciar la diligencia, que pueden pedir un receso cuando lo requieran.', 'Prestar atención a las señales no verbales de las niñas, niños y adolescentes, debido a que pueden requerir de un descanso y no expresarlo verbalmente, por lo que se puede preguntar explícitamente.', 'Implementar espacios de descanso cada 20 minutos cuando en la participación de las niñas, niños o adolescentes se identifique hiperactividad, dificultad de atención o para la regulación emocional.'] },
  ]
};


export default function AnexoD({ editable = false, withNavbar = true, onSaveAndExit }) {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const isInitialMount = useRef(true);

  // Carga los datos guardados
  useEffect(() => {
    if (editable) {
      try {
        const saved = localStorage.getItem(`anexoD-${id}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          setForm(prev => ({ ...initialState, ...prev, ...parsed }));
        }
      } catch (error) {
        console.error("Error al cargar datos del anexo D:", error);
      }
    }
  }, [id, editable]);

  // Guarda los datos al cambiar
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (editable) {
      try {
        localStorage.setItem(`anexoD-${id}`, JSON.stringify(form));
      } catch (error) {
        console.error("Error al guardar datos del anexo D:", error);
      }
    }
  }, [form, id, editable]);

  const handleCheckboxChange = (section, key, item) => {
    setForm(prev => {
      const items = prev[section]?.[key] || [];
      const newItems = items.includes(item)
        ? items.filter(i => i !== item)
        : [...items, item];
      return { ...prev, [section]: { ...prev[section], [key]: newItems } };
    });
  };
  
  const handleTextChange = (field, value) => {
      setForm(prev => ({...prev, [field]: value}));
  }

  // Helper para renderizar una sección de la tabla
  const renderSection = (sectionKey) => {
    const sectionData = apoyosDescripcion[sectionKey];
    return sectionData.map(({ key, categoria, items }) => (
      <React.Fragment key={key}>
        <tr>
          <td rowSpan={items.length} colSpan={3}>{categoria}</td>
          <td colSpan={3}>
            <label>
              <input type="checkbox" disabled={!editable} checked={form[sectionKey]?.[key]?.includes(items[0])} onChange={() => handleCheckboxChange(sectionKey, key, items[0])} /> {items[0]}
            </label>
          </td>
        </tr>
        {items.slice(1).map(item => (
          <tr key={item}>
            <td colSpan={3}>
              <label>
                <input type="checkbox" disabled={!editable} checked={form[sectionKey]?.[key]?.includes(item)} onChange={() => handleCheckboxChange(sectionKey, key, item)} /> {item}
              </label>
            </td>
          </tr>
        ))}
      </React.Fragment>
    ));
  };

  return (
    <>
      {withNavbar && <Navbar title="Anexo D" />}
      <div className="guideStepContainer">
        <table className="styled-table">
          <thead>
            <tr className="header-row"><td colSpan={6}>Apoyos generales de participación para Niñas, Niños y Adolescentes</td></tr>
          </thead>
          <tbody>
            {/* SECCIÓN INFRAESTRUCTURA */}
            <tr className="subheader-row"><td colSpan={6}>Apoyos generales de infraestructura</td></tr>
            <tr>
              <td colSpan={3} style={{ fontWeight: 'bold' }}>Categoría</td>
              <td colSpan={3} style={{ fontWeight: 'bold' }}>Descripción / Selección</td>
            </tr>
            {renderSection('infraestructura')}

            {/* SECCIÓN COMUNICACIÓN */}
            <tr className="subheader-row"><td colSpan={6}>Apoyos generales de comunicación</td></tr>
            {renderSection('comunicacion')}

            {/* SECCIÓN DINÁMICA */}
            <tr className="subheader-row"><td colSpan={6}>Apoyos generales de la dinámica del procedimiento de la diligencia</td></tr>
            {renderSection('dinamica')}

            {/* SECCIÓN OBSERVACIONES */}
            <tr className="subheader-row"><td colSpan={6}>Observaciones</td></tr>
            <tr>
              <td colSpan={6}>
                <textarea 
                  disabled={!editable}
                  value={form.observaciones}
                  onChange={(e) => handleTextChange('observaciones', e.target.value)}
                  style={{width: '100%', minHeight: '100px', resize: 'vertical', padding: '8px'}}
                  placeholder='Añade aquí cualquier observación relevante sobre los apoyos seleccionados...'
                />
              </td>
            </tr>
          </tbody>
        </table>
        {editable && (
          <div style={{ marginTop: "1.5rem" }}>
            <button className="button button-secondary" onClick={onSaveAndExit}>
              Guardar y volver
            </button>
          </div>
        )}
      </div>
    </>
  );
}

