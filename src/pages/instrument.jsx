import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navBar.jsx";

// Se importan todos los componentes de los pasos
import GuideStep0 from "../pages/contentGuide/guideStep0.jsx";
import GuideStep1 from "../pages/contentGuide/guideStep1.jsx";
import GuideStep2 from "../pages/contentGuide/guideStep2.jsx";
import GuideStep3 from "../pages/contentGuide/guideStep3.jsx";
import GuideStep4 from "../pages/contentGuide/guideStep4.jsx";
import GuideStep5 from "../pages/contentGuide/guideStep5.jsx";

import "../styles/button.css";

const pasos = [
  { key: 0, title: "Consentimiento Informado" },
  { key: 1, title: "Revisión del Expediente" },
  { key: 2, title: "Verificación con la familia" },
  { key: 3, title: "Verificación con el NNA" },
  { key: 4, title: "Apoyos generales de participación" },
  { key: 5, title: "Perfil de apoyos" },
];

export default function Instrumento() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [activeStep, setActiveStep] = useState(null); 
  const [registroActual, setRegistroActual] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) setCurrentUser(JSON.parse(storedUser));

      const todosLosRegistros = JSON.parse(localStorage.getItem('registrosNiños')) || [];
      const registro = todosLosRegistros.find(r => String(r.id) === String(id));
      setRegistroActual(registro);
      
    } catch (error) {
      console.error("Error al cargar datos desde localStorage:", error);
    }
  }, [id]);

  const updateRegistroEnStorage = (updates) => {
    const todosLosRegistros = JSON.parse(localStorage.getItem('registrosNiños')) || [];
    const registrosActualizados = todosLosRegistros.map(registro => {
      if (String(registro.id) === String(id)) {
        const nuevoRegistro = { ...registro, ...updates };
        setRegistroActual(nuevoRegistro);
        return nuevoRegistro;
      }
      return registro;
    });
    localStorage.setItem('registrosNiños', JSON.stringify(registrosActualizados));
  };

  const handleAbrirPaso = (stepKey) => {
    setActiveStep(stepKey);
  };

  const handleGuardarYVolverALista = () => {
    if (activeStep !== null) {
      updateRegistroEnStorage({ pasoActual: activeStep });
    }
    setActiveStep(null);
  };

  const handleAtrasSinGuardar = () => {
    setActiveStep(null);
  };

  const handleSiguientePaso = () => {
    if (activeStep !== null && activeStep < 5) {
      updateRegistroEnStorage({ pasoActual: activeStep });
      setActiveStep(activeStep + 1);
    }
  };

  const handleFinalizar = () => {
    updateRegistroEnStorage({ estado: 'realizado', pasoActual: 5 });
    alert(`Instrumento finalizado para el niño ${id}.`);
    navigate('/dashboard');
  };

  const handleUploadSuccess = (uploadResult) => {
    updateRegistroEnStorage({ documento: uploadResult.fileData, pasoActual: 0 });
    setActiveStep(null); 
  };

  const renderPasoActivo = () => {
    switch (activeStep) {
      // -> CORRECCIÓN CLAVE AQUÍ <-
      // Se asegura de pasar el documento existente como prop a GuideStep0.
      case 0: 
        return <GuideStep0 
          onUploadSuccess={handleUploadSuccess} 
          existingDocument={registroActual?.documento} 
        />;
      case 1: return <GuideStep1 withNavbar={false} />;
      case 2: return <GuideStep2 withNavbar={false} />;
      case 3: return <GuideStep3 withNavbar={false} />;
      case 4: return <GuideStep4 withNavbar={false} />;
      case 5: return <GuideStep5 withNavbar={false} />;
      default: return null;
    }
  };

  const getStepStatus = (stepKey) => {
    if (!registroActual) return "Pendiente";
    if (registroActual.estado === 'realizado') return "Completado";

    if (stepKey === 0) {
      return registroActual.documento ? "Completado" : "Pendiente";
    }
    const pasoGuardado = registroActual.pasoActual !== null ? registroActual.pasoActual : (registroActual.documento ? 0 : -1);
    if (pasoGuardado >= stepKey) return "Completado";
    if (pasoGuardado === stepKey - 1) return "Siguiente";
    return "Pendiente";
  };

  return (
    <>
      <Navbar title={`Instrumento para niño ${id}`} currentUser={currentUser} />
      <div style={{ padding: "2rem" }}>
        {!activeStep && activeStep !== 0 ? (
          <>
            <h2>Pasos del Instrumento</h2>
            <ul>
              {pasos.map(({ key, title }) => {
                const status = getStepStatus(key);
                const isDisabled = status === 'Pendiente' && key !== 0 && registroActual?.estado !== 'realizado';

                return (
                  <li key={key} style={{ marginBottom: "1rem" }}>
                    <span>
                      <strong>Paso {key}: {title}</strong> – {status}
                    </span>
                    <button
                      className="button button-primary"
                      style={{ marginLeft: "1rem" }}
                      onClick={() => handleAbrirPaso(key)}
                      disabled={isDisabled}
                    >
                      {status === 'Completado' ? "Revisar" : "Abrir"}
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              className="button button-secondary"
              onClick={() => navigate("/dashboard")}
            >
              Volver al dashboard
            </button>
          </>
        ) : (
          <>
            {renderPasoActivo()}
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="button button-primary" onClick={handleGuardarYVolverALista}>
                Guardar y Volver a la Lista
              </button>
              <button className="button button-secondary" onClick={handleAtrasSinGuardar}>
                Atrás (sin guardar)
              </button>
              {activeStep < 5 && (
                <button className="button button-success" onClick={handleSiguientePaso}>
                  Guardar y Siguiente Paso
                </button>
              )}
              {activeStep === 5 && (
                <button className="button button-success" onClick={handleFinalizar}>
                  Finalizar Instrumento
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

