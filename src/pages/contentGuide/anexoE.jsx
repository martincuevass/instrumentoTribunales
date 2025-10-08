import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

// --- Estructura de Datos y Opciones ---
const comunicacionalesOptions = [
  "Descripción de imágenes y espacios", "Intérprete en lengua de señas (mexicana)", "Intérprete en lengua maya",
  "Persona de confianza", "Pictogramas", "Materiales de apoyo para la expresión emocional",
  "Estrategias de modelamiento para la identificación personal", "Adecuaciones cognitivas en programas de orientación persona",
  "Adecuaciones cognitivas en programas de orientación temporal", "Adecuaciones cognitivas en programas de orientación espacial",
  "Adecuaciones cognitivas en programas de atención", "Adecuaciones cognitivas en programas de memoria",
  "Uso de aparatos electrónicos con sistemas aumentativos y alternativos de comunicación"
];

const diligenciaOptions = [
  "Objeto de seguridad emocional", "Intervenciones breves", "Apoyo de proximidad",
  "Acondicionar momentos de alimentación", "Sala de espera separada de la persona que la acompaña",
  "Informar sobre estatus del medio o disposición final"
];

const initialState = {
  datosGenerales: { nombreNNA: "", edad: "", nombrePerito: "", fecha: "" },
  infraestructura: {
    salaEntrevista: "",
    adecuacionesAcceso: "",
    adecuacionesTemperatura: ""
  },
  comunicacionales: comunicacionalesOptions.reduce((acc, option) => ({ ...acc, [option]: "" }), {}),
  duranteDiligencia: diligenciaOptions.reduce((acc, option) => ({ ...acc, [option]: "" }), {}),
  descripcionImplementacion: ""
};

// --- Componente de Fila reutilizable ---
const OptionRow = ({ category, description, value, onChange, editable }) => (
  <tr>
    {category && <td rowSpan={category.rowSpan}>{category.name}</td>}
    <td>{description}</td>
    <td><input type="radio" name={`${description}-radio`} disabled={!editable} checked={value === 'Sí'} onChange={() => onChange(description, 'Sí')} /></td>
    <td><input type="radio" name={`${description}-radio`} disabled={!editable} checked={value === 'No'} onChange={() => onChange(description, 'No')} /></td>
    <td><input type="radio" name={`${description}-radio`} disabled={!editable} checked={value === 'N/A'} onChange={() => onChange(description, 'N/A')} /></td>
  </tr>
);


export default function AnexoE({ editable = false, withNavbar = true, onSaveAndExit }) {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const isInitialMount = useRef(true);

  // Carga los datos guardados
  useEffect(() => {
    if (editable) {
      try {
        const saved = localStorage.getItem(`anexoE-${id}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          setForm(prev => ({ ...initialState, ...prev, ...parsed }));
        }
      } catch (error) {
        console.error("Error al cargar datos del anexo E:", error);
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
        localStorage.setItem(`anexoE-${id}`, JSON.stringify(form));
      } catch (error) {
        console.error("Error al guardar datos del anexo E:", error);
      }
    }
  }, [form, id, editable]);

  // --- Manejadores de cambios ---
  const handleTextChange = (section, field, value) => {
    setForm(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
  };
  
  const handleRadioChange = (section, field, value) => {
    setForm(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
  };

  return (
    <>
      {withNavbar && <Navbar title="Anexo E" />}
      <div className="guideStepContainer">
        <table className="styled-table">
          <thead>
            <tr className="header-row">
              <th colSpan={5}>Perfil de apoyos centrados en la Niña, Niño o Adolescente</th>
            </tr>
          </thead>
          <tbody>
            {/* --- Datos generales --- */}
            <tr>
              <td colSpan={5}>
                Nombre de la Niña, Niño o Adolescente:{" "}
                <input type="text" disabled={!editable} value={form.datosGenerales.nombreNNA} onChange={e => handleTextChange('datosGenerales', 'nombreNNA', e.target.value)} className="inputField" />
                &nbsp;&nbsp;
                Edad: <input type="number" disabled={!editable} value={form.datosGenerales.edad} onChange={e => handleTextChange('datosGenerales', 'edad', e.target.value)} className="inputField smallInput" /> <br />
                Nombre del perito:{" "}
                <input type="text" disabled={!editable} value={form.datosGenerales.nombrePerito} onChange={e => handleTextChange('datosGenerales', 'nombrePerito', e.target.value)} className="inputField" />
                &nbsp;&nbsp;
                Fecha: <input type="date" disabled={!editable} value={form.datosGenerales.fecha} onChange={e => handleTextChange('datosGenerales', 'fecha', e.target.value)} className="inputField" />
              </td>
            </tr>
            <tr className="subheader-row">
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Sí</th>
              <th>No</th>
              <th>N/A</th>
            </tr>

            {/* --- Infraestructura --- */}
            <OptionRow category={{ name: "Infraestructura", rowSpan: 3 }} description="Sala de entrevista en piso 1" value={form.infraestructura.salaEntrevista} onChange={(desc, val) => handleRadioChange('infraestructura', 'salaEntrevista', val)} editable={editable} />
            <OptionRow description="Adecuaciones esenciales de acceso" value={form.infraestructura.adecuacionesAcceso} onChange={(desc, val) => handleRadioChange('infraestructura', 'adecuacionesAcceso', val)} editable={editable} />
            <OptionRow description="Adecuaciones ambientales de temperatura" value={form.infraestructura.adecuacionesTemperatura} onChange={(desc, val) => handleRadioChange('infraestructura', 'adecuacionesTemperatura', val)} editable={editable} />
            
            {/* --- Comunicacionales --- */}
            <tr className="subheader-row"><th colSpan={5}>Comunicacionales</th></tr>
            {comunicacionalesOptions.map((desc, index) => (
              <OptionRow key={desc} category={index === 0 ? { name: "Comunicacionales", rowSpan: comunicacionalesOptions.length } : null} description={desc} value={form.comunicacionales[desc]} onChange={(d, val) => handleRadioChange('comunicacionales', d, val)} editable={editable} />
            ))}
            
            {/* --- Durante la diligencia --- */}
            <tr className="subheader-row"><th colSpan={5}>Durante el procedimiento de la diligencia</th></tr>
            {diligenciaOptions.map((desc, index) => (
               <OptionRow key={desc} category={index === 0 ? { name: "Durante la diligencia", rowSpan: diligenciaOptions.length } : null} description={desc} value={form.duranteDiligencia[desc]} onChange={(d, val) => handleRadioChange('duranteDiligencia', d, val)} editable={editable} />
            ))}

            {/* --- Descripción --- */}
            <tr className="subheader-row">
              <td colSpan={5} style={{ fontWeight: "bold" }}>
                Descripción de la implementación del apoyo:
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <textarea disabled={!editable} value={form.descripcionImplementacion} onChange={e => setForm(prev => ({...prev, descripcionImplementacion: e.target.value}))} className="inputField" style={{ width: "100%", height: "80px", resize: 'vertical' }} />
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
