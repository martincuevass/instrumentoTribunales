import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navBar";

import AnexoA from "../pages/contentGuide/anexoA";
import AnexoB from "../pages/contentGuide/anexoB";
import AnexoC from "../pages/contentGuide/anexoC";
import AnexoD from "../pages/contentGuide/anexoD";
import AnexoE from "../pages/contentGuide/anexoE";

import "../styles/button.css";

export default function Anexos() {
  const { id } = useParams(); // niño
  const navigate = useNavigate();

  const [activeAnexo, setActiveAnexo] = useState(null); // A, B, C, D, E
  const [status, setStatus] = useState({ A: false, B: false, C: false, D: false, E: false });

  // cargar anexos ya llenados
  useEffect(() => {
    const newStatus = { ...status };
    ["A", "B", "C", "D", "E"].forEach((key) => {
      const saved = localStorage.getItem(`anexo${key}-${id}`);
      newStatus[key] = !!saved; // true si existe
    });
    setStatus(newStatus);
  }, [id]);

  const handleAbrirAnexo = (key) => {
    setActiveAnexo(key);
  };

  const handleSalir = () => {
    setActiveAnexo(null);
    const newStatus = { ...status };
    ["A", "B", "C", "D", "E"].forEach((key) => {
      const saved = localStorage.getItem(`anexo${key}-${id}`);
      newStatus[key] = !!saved;
    });
    setStatus(newStatus);
  };

  const renderAnexo = () => {
    switch (activeAnexo) {
      case "A":
        return <AnexoA editable={true} withNavbar={false} />;
      case "B":
        return <AnexoB editable={true} withNavbar={false} />;
      case "C":
        return <AnexoC editable={true} withNavbar={false} />;
      case "D":
        return <AnexoD editable={true} withNavbar={false} />;
      case "E":
        return <AnexoE editable={true} withNavbar={false} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar title={`Anexos del niño ${id}`} />

      <div style={{ padding: "2rem" }}>
        {!activeAnexo ? (
          <>
            <h2>Estado de Anexos</h2>
            <ul>
              {["A", "B", "C", "D", "E"].map((key) => (
                <li key={key} style={{ marginBottom: "1rem" }}>
                  <span>
                    <strong>Anexo {key}</strong> –{" "}
                    {status[key] ? " Llenado" : " Pendiente"}
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
            {renderAnexo()}
            <div style={{ marginTop: "1.5rem" }}>
              <button className="button button-secondary" onClick={handleSalir}>
                Guardar y volver a lista de anexos
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
