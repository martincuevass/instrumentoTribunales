import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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
  { key: 4, "title": "Apoyos generales de participación" },
  { key: 5, title: "Perfil de apoyos" },
];

const anexoMapping = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E'
};

// Función auxiliar para dar color al estado de cada paso
const getStatusColor = (status) => {
    switch (status) {
        case 'Completado': return 'green';
        case 'Siguiente': return '#3c92c9'; // Un color azul para indicar acción
        case 'Pendiente': return 'red';
        default: return '#1e325a'; // Color por defecto
    }
};

export default function Instrumento() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

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

      const params = new URLSearchParams(location.search);
      const stepToOpen = params.get('openStep');
      if (stepToOpen) {
        setActiveStep(parseInt(stepToOpen));
        navigate(`/instrument/${id}`, { replace: true });
      }
      
    } catch (error) {
      console.error("Error al cargar datos desde localStorage:", error);
    }
  }, [id, location.search]);

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
  
  const handleSiguientePaso = () => {
    if (activeStep !== null && activeStep < 5) {
      updateRegistroEnStorage({ pasoActual: activeStep });
      setActiveStep(activeStep + 1);
    }
  };

  const handleFinalizar = (dataDelPasoFinal) => {
    updateRegistroEnStorage({ ...dataDelPasoFinal, estado: 'realizado', pasoActual: 5 });
    alert(`Instrumento finalizado para el niño ${id}.`);
    navigate('/dashboard');
  };

  const handleUploadSuccess = (documentos) => {
    updateRegistroEnStorage({ consentimientos: documentos, pasoActual: 0 });
    setActiveStep(1);
  };
  
  const handleCapturarResultados = () => {
    const anexoKey = anexoMapping[activeStep];
    if (anexoKey) {
        navigate(`/anexoshandler/${id}?open=${anexoKey}&from=instrument&returnStep=${activeStep}`);
    } else {
        alert("Este paso no tiene un anexo de resultados asociado.");
    }
  };

  const renderPasoActivo = () => {
    switch (activeStep) {
      case 0: 
        return <GuideStep0 
          onUploadSuccess={handleUploadSuccess} 
          existingDocuments={registroActual?.consentimientos || {}} 
          withNavbar={false} 
        />;
      case 1: return <GuideStep1 withNavbar={false} />;
      case 2: return <GuideStep2 withNavbar={false} />;
      case 3: return <GuideStep3 withNavbar={false} />;
      case 4: return <GuideStep4 withNavbar={false} />;
      case 5: return <GuideStep5 withNavbar={false} onSave={handleFinalizar} />;
      default: return null;
    }
  };

  const getStepStatus = (stepKey) => {
    if (!registroActual) return "Pendiente";
    if (registroActual.estado === 'realizado') return "Completado";
    if (stepKey === 0) {
      return (registroActual.consentimientos && Object.keys(registroActual.consentimientos).length > 0) ? "Completado" : "Pendiente";
    }
    const pasoGuardado = registroActual.pasoActual !== null ? registroActual.pasoActual : -1;
    if (pasoGuardado >= stepKey) return "Completado";
    if (pasoGuardado === stepKey - 1) return "Siguiente";
    return "Pendiente";
  };

  return (
    <>
      <Navbar title={`Instrumento para niño ${id}`} currentUser={currentUser} />
      <div style={{ padding: "2rem" }}>
        {activeStep === null ? (
          <>
            <h2>Pasos del Instrumento</h2>
            <ul>
              {pasos.map(({ key, title }) => {
                const status = getStepStatus(key);
                const isDisabled = status === 'Pendiente' && getStepStatus(key - 1) !== 'Completado';
                return (
                  <li key={key} style={{ marginBottom: "1rem" }}>
                    <span>
                      <strong>Paso {key}: {title}</strong> – 
                      <span style={{ color: getStatusColor(status), fontWeight: 'bold' }}>
                        {' '}{status}
                      </span>
                    </span>
                    <button
                      className="button button-primary"
                      style={{ marginLeft: "1rem" }}
                      onClick={() => handleAbrirPaso(key)}
                      disabled={key > 0 && isDisabled && registroActual?.estado !== 'realizado'}
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
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", borderTop: "1px solid #ccc", paddingTop: "1.5rem" }}>
              <button className="button button-primary" onClick={handleGuardarYVolverALista}>
                Guardar y Volver a la Lista
              </button>
              {activeStep >= 1 && activeStep <= 5 && (
                  <button className="button button-info" onClick={handleCapturarResultados}>
                    Capturar Resultados
                  </button>
              )}
              {activeStep < 5 && (
                <button className="button button-success" onClick={handleSiguientePaso}>
                  Guardar y Siguiente Paso
                </button>
              )}
              {activeStep === 5 && (
                <button className="button button-success" onClick={() => handleFinalizar({})}>
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