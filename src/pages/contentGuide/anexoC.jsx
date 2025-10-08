import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";

// Estructura de datos inicial para el Anexo C
const initialState = {
  preguntasDirectas: {
    hambre: { tiene: "No", cual: "" },
    sueno: { tiene: "No", cual: "" },
    bano: { tiene: "No", cual: "" },
    saludFisica: { tiene: "No", cual: "" },
    sonidoMolesto: { tiene: "No", cual: "" },
    temperaturaSala: { estaBien: "Si", motivo: "" },
    condicionSalud: { tiene: "No", cual: "" },
  },
  acompanante: {
    nombre: "",
    relacion: [],
    relacionOtro: ""
  },
  preguntasAbiertas: {
    sentirFeliz: "",
    comoSabeFeliz: "",
    queHaceFeliz: ""
  }
};

export default function AnexoC({ editable = false, withNavbar = true, onSaveAndExit }) {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const isInitialMount = useRef(true);

  // Carga los datos guardados desde localStorage
  useEffect(() => {
    if (editable) {
      try {
        const saved = localStorage.getItem(`anexoC-${id}`);
        if (saved) {
          setForm(prev => ({ ...prev, ...JSON.parse(saved) }));
        }
      } catch (error) {
        console.error("Error al cargar datos del anexo C:", error);
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
        localStorage.setItem(`anexoC-${id}`, JSON.stringify(form));
      } catch (error) {
        console.error("Error al guardar datos del anexo C:", error);
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
      {withNavbar && <Navbar title="Anexo C" />}
      <div className="guideStepContainer">
        <table className="styled-table">
          <tbody>
            <tr className="header-row"><td colSpan={6}>Verificación directa con la Niña, Niño o Adolescente</td></tr>
            <tr className="subheader-row"><td colSpan={6}>Datos de las preguntas directas a la Niña, Niño o Adolescente</td></tr>
            
            {/* Preguntas directas */}
            <tr>
              <td>¿Tienes hambre en este momento?:</td>
              <td><label><input type="radio" disabled={!editable} checked={form.preguntasDirectas.hambre.tiene === "No"} onChange={() => handleDeepNestedChange('preguntasDirectas', 'hambre', 'tiene', 'No')} /> No</label></td>
              <td colSpan={4}>
                <label><input type="radio" disabled={!editable} checked={form.preguntasDirectas.hambre.tiene === "Si"} onChange={() => handleDeepNestedChange('preguntasDirectas', 'hambre', 'tiene', 'Si')} /> Si</label>
                {form.preguntasDirectas.hambre.tiene === "Si" && <input type="text" placeholder="¿Qué te gustaría?" disabled={!editable} value={form.preguntasDirectas.hambre.cual} onChange={e => handleDeepNestedChange('preguntasDirectas', 'hambre', 'cual', e.target.value)} />}
              </td>
            </tr>
            <tr>
              <td>¿Tienes sueño en este momento?:</td>
              <td><label><input type="radio" disabled={!editable} checked={form.preguntasDirectas.sueno.tiene === "No"} onChange={() => handleDeepNestedChange('preguntasDirectas', 'sueno', 'tiene', 'No')} /> No</label></td>
              <td colSpan={4}>
                <label><input type="radio" disabled={!editable} checked={form.preguntasDirectas.sueno.tiene === "Si"} onChange={() => handleDeepNestedChange('preguntasDirectas', 'sueno', 'tiene', 'Si')} /> Si</label>
                {form.preguntasDirectas.sueno.tiene === "Si" && <input type="text" placeholder="Describe" disabled={!editable} value={form.preguntasDirectas.sueno.cual} onChange={e => handleDeepNestedChange('preguntasDirectas', 'sueno', 'cual', e.target.value)} />}
              </td>
            </tr>
             <tr>
              <td>¿Tienes ganas de ir al baño en este momento?:</td>
              <td><label><input type="radio" disabled={!editable} checked={form.preguntasDirectas.bano.tiene === "No"} onChange={() => handleDeepNestedChange('preguntasDirectas', 'bano', 'tiene', 'No')} /> No</label></td>
              <td colSpan={4}>
                <label><input type="radio" disabled={!editable} checked={form.preguntasDirectas.bano.tiene === "Si"} onChange={() => handleDeepNestedChange('preguntasDirectas', 'bano', 'tiene', 'Si')} /> Si</label>
              </td>
            </tr>
            <tr>
              <td>¿Cómo te sientes físicamente (salud)? (Para menores de 6 años: ¿te duele algo?)</td>
              <td><label><input type="radio" disabled={!editable} checked={form.preguntasDirectas.saludFisica.tiene === "No"} onChange={() => handleDeepNestedChange('preguntasDirectas', 'saludFisica', 'tiene', 'No')} /> Bien</label></td>
              <td colSpan={4}>
                <label><input type="radio" disabled={!editable} checked={form.preguntasDirectas.saludFisica.tiene === "Si"} onChange={() => handleDeepNestedChange('preguntasDirectas', 'saludFisica', 'tiene', 'Si')} /> Me duele algo</label>
                {form.preguntasDirectas.saludFisica.tiene === "Si" && <input type="text" placeholder="¿Qué te duele?" disabled={!editable} value={form.preguntasDirectas.saludFisica.cual} onChange={e => handleDeepNestedChange('preguntasDirectas', 'saludFisica', 'cual', e.target.value)} />}
              </td>
            </tr>
            {/* Continuación de las preguntas... */}
            <tr>
              <td>Nombre de familiar o acompañante:</td>
              <td colSpan={5}><input type="text" disabled={!editable} value={form.acompanante.nombre} onChange={e => handleNestedChange('acompanante', 'nombre', e.target.value)} style={{ width: "100%" }}/></td>
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
            <tr>
              <td colSpan={3}>Cuéntame algo que te haga sentir feliz:</td>
              <td colSpan={3}><textarea disabled={!editable} value={form.preguntasAbiertas.sentirFeliz} onChange={e => handleNestedChange('preguntasAbiertas', 'sentirFeliz', e.target.value)} className="inputField" style={{ width: "100%", height: "60px" }} /></td>
            </tr>
            <tr>
              <td colSpan={3}>Cuéntame, ¿cómo te das cuenta que otra persona está feliz?:</td>
              <td colSpan={3}><textarea disabled={!editable} value={form.preguntasAbiertas.comoSabeFeliz} onChange={e => handleNestedChange('preguntasAbiertas', 'comoSabeFeliz', e.target.value)} className="inputField" style={{ width: "100%", height: "60px" }} /></td>
            </tr>
            <tr>
              <td colSpan={3}>Cuéntame, ¿qué cosas haces cuando te sientes feliz?:</td>
              <td colSpan={3}><textarea disabled={!editable} value={form.preguntasAbiertas.queHaceFeliz} onChange={e => handleNestedChange('preguntasAbiertas', 'queHaceFeliz', e.target.value)} className="inputField" style={{ width: "100%", height: "60px" }} /></td>
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
