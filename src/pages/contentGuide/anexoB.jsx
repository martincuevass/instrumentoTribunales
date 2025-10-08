import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";

// Estructura de datos inicial para el Anexo B
const initialState = {
  acompanante: { nombre: "", relacion: [], relacionOtro: "" },
  nna: {
    nombre: "", edad: "", nacimiento: { dd: "", mm: "", aa: "" }, sexo: "",
    asisteEscuela: "No", gradoEscolar: "", condicionSalud: "No", condicionSaludCual: "",
    apoyoParamedicos: "No", apoyoParamedicosMotivo: "", terapiaPsicologica: "No",
    terapiaPsicologicaMotivo: "", atencionPsiquiatrica: { asiste: "No", motivo: "", usaMedicamento: "No", medicamentoCual: "" },
    discapacidad: { tiene: "No", cual: "", tipos: [] }, controlBano: "No",
    dificultadHabla: "No", dificultadHablaCual: "", requiereInterprete: "No",
    interpreteCual: "", interpreteTipos: []
  },
  necesidadesBasicas: { hambre: "No", hambreCual: "", sueno: "No", suenoMotivo: "" },
  emociones: {
    reconoce: "", reconoceDesc: "", sintoniza: "", sintonizaDesc: "",
    expresa: "", expresaDesc: "", regula: "", regulaDesc: ""
  },
  diligencia: { abordadoMotivo: "No", reaccion: "" },
  riesgos: { autolesiones: "No", autolesionesDesc: "" },
  gustos: { conoce: "No", descripcion: "" },
  observacionesGenerales: "",
  fechaAplicacion: { dd: "", mm: "", aa: "" }
};

export default function AnexoB({ editable = false, withNavbar = true, onSaveAndExit }) {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const isInitialMount = useRef(true);

  // Carga los datos guardados desde localStorage
  useEffect(() => {
    if (editable) {
      try {
        const saved = localStorage.getItem(`anexoB-${id}`);
        if (saved) {
          setForm(prev => ({ ...prev, ...JSON.parse(saved) }));
        }
      } catch (error) {
        console.error("Error al cargar datos del anexo B:", error);
      }
    }
  }, [id, editable]);

  // Guarda los datos en localStorage cada vez que el formulario cambia
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (editable) {
      try {
        localStorage.setItem(`anexoB-${id}`, JSON.stringify(form));
      } catch (error) {
        console.error("Error al guardar datos del anexo B:", error);
      }
    }
  }, [form, id, editable]);

  // --- Funciones para manejar los cambios en los inputs ---
  const handleNestedChange = (section, field, value) => {
    setForm(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
  };
  
  const handleDeepNestedChange = (section, subSection, field, value) => {
    setForm(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subSection]: { ...prev[section][subSection], [field]: value }
      }
    }));
  };

  const handleCheckboxGroup = (section, field, value) => {
    setForm(prev => {
      const currentItems = prev[section][field] || [];
      const newItems = currentItems.includes(value)
        ? currentItems.filter(item => item !== value)
        : [...currentItems, value];
      return { ...prev, [section]: { ...prev[section], [field]: newItems } };
    });
  };

  return (
    <>
      {withNavbar && <Navbar title="Anexo B" />}
      <div className="guideStepContainer">
        <table className="styled-table">
          <tbody>
            <tr className="header-row"><td colSpan={6}>Verificación de datos con la familia o persona acompañante</td></tr>
            <tr className="subheader-row"><td colSpan={6}>Información de la familia o persona acompañante</td></tr>
            <tr>
              <td>Nombre de familiar o acompañante:</td>
              <td colSpan={5}><input type="text" disabled={!editable} value={form.acompanante.nombre} onChange={e => handleNestedChange('acompanante', 'nombre', e.target.value)} /></td>
            </tr>
            <tr>
              <td>Relación con la Niña, Niño o Adolescente:</td>
              {["Madre", "Padre", "Abuela/abuelo", "Hermana/hermano"].map(rel => (
                <td key={rel}><label><input type="checkbox" disabled={!editable} checked={form.acompanante.relacion.includes(rel)} onChange={() => handleCheckboxGroup('acompanante', 'relacion', rel)} /> {rel}</label></td>
              ))}
              <td>
                <label><input type="checkbox" disabled={!editable} checked={form.acompanante.relacion.includes("Otro")} onChange={() => handleCheckboxGroup('acompanante', 'relacion', "Otro")} /> Otro:</label>
                {form.acompanante.relacion.includes("Otro") && <input type="text" placeholder="Describir" disabled={!editable} value={form.acompanante.relacionOtro} onChange={e => handleNestedChange('acompanante', 'relacionOtro', e.target.value)} />}
              </td>
            </tr>

            <tr className="subheader-row"><td colSpan={6}>Información de la Niña, Niño o Adolescente</td></tr>
            <tr>
                <td>Nombre:</td>
                <td colSpan={5}><input type="text" disabled={!editable} value={form.nna.nombre} onChange={e => handleNestedChange('nna', 'nombre', e.target.value)} /></td>
            </tr>
            <tr>
                <td>Edad:</td>
                <td colSpan={5}><input type="number" disabled={!editable} value={form.nna.edad} onChange={e => handleNestedChange('nna', 'edad', e.target.value)} /></td>
            </tr>
            <tr>
                <td>Fecha de nacimiento:</td>
                <td><input type="text" placeholder="DD" maxLength="2" disabled={!editable} value={form.nna.nacimiento.dd} onChange={e => handleDeepNestedChange('nna', 'nacimiento', 'dd', e.target.value)} /></td>
                <td><input type="text" placeholder="MM" maxLength="2" disabled={!editable} value={form.nna.nacimiento.mm} onChange={e => handleDeepNestedChange('nna', 'nacimiento', 'mm', e.target.value)} /></td>
                <td colSpan={3}><input type="text" placeholder="AAAA" maxLength="4" disabled={!editable} value={form.nna.nacimiento.aa} onChange={e => handleDeepNestedChange('nna', 'nacimiento', 'aa', e.target.value)} /></td>
            </tr>
            <tr>
                <td>Sexo:</td>
                <td><label><input type="radio" disabled={!editable} checked={form.nna.sexo === 'Mujer'} onChange={() => handleNestedChange('nna', 'sexo', 'Mujer')} /> Mujer</label></td>
                <td><label><input type="radio" disabled={!editable} checked={form.nna.sexo === 'Hombre'} onChange={() => handleNestedChange('nna', 'sexo', 'Hombre')} /> Hombre</label></td>
                <td colSpan={3}><label><input type="radio" disabled={!editable} checked={form.nna.sexo === 'Otro'} onChange={() => handleNestedChange('nna', 'sexo', 'Otro')} /> Otro</label></td>
            </tr>
            <tr>
                <td>¿Asiste a la escuela?:</td>
                <td><label><input type="radio" disabled={!editable} checked={form.nna.asisteEscuela === 'No'} onChange={() => handleNestedChange('nna', 'asisteEscuela', 'No')} /> No</label></td>
                <td colSpan={4}>
                    <label><input type="radio" disabled={!editable} checked={form.nna.asisteEscuela === 'Si'} onChange={() => handleNestedChange('nna', 'asisteEscuela', 'Si')} /> Si</label>
                    {form.nna.asisteEscuela === 'Si' && <input type="text" placeholder="Grado escolar" disabled={!editable} value={form.nna.gradoEscolar} onChange={e => handleNestedChange('nna', 'gradoEscolar', e.target.value)} />}
                </td>
            </tr>
            <tr>
                <td>¿Se ha identificado alguna condición de salud?:</td>
                <td><label><input type="radio" disabled={!editable} checked={form.nna.condicionSalud === 'No'} onChange={() => handleNestedChange('nna', 'condicionSalud', 'No')} /> No</label></td>
                <td colSpan={4}>
                    <label><input type="radio" disabled={!editable} checked={form.nna.condicionSalud === 'Si'} onChange={() => handleNestedChange('nna', 'condicionSalud', 'Si')} /> Si</label>
                    {form.nna.condicionSalud === 'Si' && <input type="text" placeholder="¿Cuál?" disabled={!editable} value={form.nna.condicionSaludCual} onChange={e => handleNestedChange('nna', 'condicionSaludCual', e.target.value)} />}
                </td>
            </tr>
            <tr>
                <td>¿Se requiere apoyo de paramédicos en la diligencia?</td>
                <td><label><input type="radio" disabled={!editable} checked={form.nna.apoyoParamedicos === 'No'} onChange={() => handleNestedChange('nna', 'apoyoParamedicos', 'No')} /> No</label></td>
                <td colSpan={4}>
                    <label><input type="radio" disabled={!editable} checked={form.nna.apoyoParamedicos === 'Si'} onChange={() => handleNestedChange('nna', 'apoyoParamedicos', 'Si')} /> Si</label>
                    {form.nna.apoyoParamedicos === 'Si' && <input type="text" placeholder="Motivo" disabled={!editable} value={form.nna.apoyoParamedicosMotivo} onChange={e => handleNestedChange('nna', 'apoyoParamedicosMotivo', e.target.value)} />}
                </td>
            </tr>
            <tr>
                <td>¿Asiste a terapia psicológica?</td>
                <td><label><input type="radio" disabled={!editable} checked={form.nna.terapiaPsicologica === 'No'} onChange={() => handleNestedChange('nna', 'terapiaPsicologica', 'No')} /> No</label></td>
                <td colSpan={4}>
                    <label><input type="radio" disabled={!editable} checked={form.nna.terapiaPsicologica === 'Si'} onChange={() => handleNestedChange('nna', 'terapiaPsicologica', 'Si')} /> Si</label>
                    {form.nna.terapiaPsicologica === 'Si' && <input type="text" placeholder="Motivo" disabled={!editable} value={form.nna.terapiaPsicologicaMotivo} onChange={e => handleNestedChange('nna', 'terapiaPsicologicaMotivo', e.target.value)} />}
                </td>
            </tr>
            <tr>
                <td>¿Asiste a atención psiquiátrica?</td>
                <td><label><input type="radio" disabled={!editable} checked={form.nna.atencionPsiquiatrica.asiste === 'No'} onChange={() => handleDeepNestedChange('nna', 'atencionPsiquiatrica', 'asiste', 'No')} /> No</label></td>
                <td colSpan={4}>
                    <label><input type="radio" disabled={!editable} checked={form.nna.atencionPsiquiatrica.asiste === 'Si'} onChange={() => handleDeepNestedChange('nna', 'atencionPsiquiatrica', 'asiste', 'Si')} /> Si</label>
                    {form.nna.atencionPsiquiatrica.asiste === 'Si' && (
                        <>
                            <input type="text" placeholder="Motivo/Diagnóstico" disabled={!editable} value={form.nna.atencionPsiquiatrica.motivo} onChange={e => handleDeepNestedChange('nna', 'atencionPsiquiatrica', 'motivo', e.target.value)} />
                            <br/>
                            Uso de medicamento:
                            <label><input type="radio" disabled={!editable} checked={form.nna.atencionPsiquiatrica.usaMedicamento === 'No'} onChange={() => handleDeepNestedChange('nna', 'atencionPsiquiatrica', 'usaMedicamento', 'No')} /> No</label>
                            <label><input type="radio" disabled={!editable} checked={form.nna.atencionPsiquiatrica.usaMedicamento === 'Si'} onChange={() => handleDeepNestedChange('nna', 'atencionPsiquiatrica', 'usaMedicamento', 'Si')} /> Si</label>
                            {form.nna.atencionPsiquiatrica.usaMedicamento === 'Si' && <input type="text" placeholder="¿Cuál?" disabled={!editable} value={form.nna.atencionPsiquiatrica.medicamentoCual} onChange={e => handleDeepNestedChange('nna', 'atencionPsiquiatrica', 'medicamentoCual', e.target.value)} />}
                        </>
                    )}
                </td>
            </tr>
             <tr>
                <td colSpan={6} style={{padding: '20px'}}>
                    {editable && (
                      <div style={{ marginTop: "1.5rem" }}>
                        <button className="button button-secondary" onClick={onSaveAndExit}>
                          Guardar y volver
                        </button>
                      </div>
                    )}
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

