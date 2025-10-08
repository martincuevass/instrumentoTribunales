import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/navBar.jsx";

import AnexoA from "../pages/contentGuide/anexoA.jsx";
import AnexoB from "../pages/contentGuide/anexoB.jsx";
import AnexoC from "../pages/contentGuide/anexoC.jsx";
import AnexoD from "../pages/contentGuide/anexoD.jsx";
import AnexoE from "../pages/contentGuide/anexoE.jsx";

import "../styles/button.css";

const anexosDisponibles = [
  { key: "A", title: "Revisión del Expediente" },
  { key: "B", title: "Verificación con la familia" },
  { key: "C", title: "Verificación con NNA" },
  { key: "D", title: "Apoyos generales de participación" },
  { key: "E", title: "Perfil de apoyos" },
];

export default function AnexosHandler() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeAnexo, setActiveAnexo] = useState(null);
  const [status, setStatus] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) setCurrentUser(JSON.parse(storedUser));
    
    updateStatusFromStorage();

    const params = new URLSearchParams(location.search);
    const openAnexo = params.get('open');
    if (openAnexo && anexosDisponibles.some(a => a.key === openAnexo)) {
      setActiveAnexo(openAnexo);
    }
  }, [id, location.search]);

  const updateStatusFromStorage = () => {
    const newStatus = {};
    anexosDisponibles.forEach(({ key }) => {
      const saved = localStorage.getItem(`anexo${key}-${id}`);
      newStatus[key] = !!saved;
    });
    setStatus(newStatus);
  };

  const handleAbrirAnexo = (key) => {
    setActiveAnexo(key);
  };

  // ✅ FUNCIÓN MODIFICADA
  const handleVolverALista = () => {
    setActiveAnexo(null);
    updateStatusFromStorage();
    navigate(`/anexoshandler/${id}`, { replace: true });
    
    // Llama a la lógica de verificación al volver a la lista
    checkAndFinalizeResults(id);
  };

  // ✅ FUNCIÓN NUEVA AÑADIDA
  const checkAndFinalizeResults = (niñoId) => {
    const todosCompletos = anexosDisponibles.every(({ key }) => {
      return localStorage.getItem(`anexo${key}-${niñoId}`) !== null;
    });

    if (!todosCompletos) return;

    const registros = JSON.parse(localStorage.getItem('registrosNiños')) || [];
    const niñoIndex = registros.findIndex(n => n.id === niñoId);

    if (niñoIndex !== -1 && registros[niñoIndex].resultados === "Pendiente") {
        registros[niñoIndex].resultados = "Completado";
        localStorage.setItem('registrosNiños', JSON.stringify(registros));
        alert(`¡Felicidades! Se han completado todos los anexos para el niño ${niñoId}.`);
    }
  };

  const renderAnexoActivo = () => {
    const props = { editable: true, withNavbar: false, onSaveAndExit: handleVolverALista };
    switch (activeAnexo) {
      case "A": return <AnexoA {...props} />;
      case "B": return <AnexoB {...props} />;
      case "C": return <AnexoC {...props} />;
      case "D": return <AnexoD {...props} />;
      case "E": return <AnexoE {...props} />;
      default: return null;
    }
  };

  return (
    <>
      <Navbar title={`Anexos del niño ${id}`} currentUser={currentUser}/>
      <div style={{ padding: "2rem" }}>
        {!activeAnexo ? (
          <>
            <h2>Estado de Anexos</h2>
            <ul>
              {anexosDisponibles.map(({ key, title }) => (
                <li key={key} style={{ marginBottom: "1rem" }}>
                  <span>
                    <strong>Anexo {key}: {title}</strong> – 
                    <span style={{ color: status[key] ? 'green' : 'red', fontWeight: 'bold' }}>
                      {status[key] ? " Llenado" : " Pendiente"}
                    </span>
                  </span>
                  <button
                    className="button button-primary"
                    style={{ marginLeft: "1rem" }}
                    onClick={() => handleAbrirAnexo(key)}
                  >
                    {status[key] ? "Editar" : "Capturar"}
                  </button>
                </li>
              ))}
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
            {renderAnexoActivo()}
          </>
        )}
      </div>
    </>
  );
}