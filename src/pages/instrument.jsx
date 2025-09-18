import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navBar";

import GuideStep1 from "../pages/contentGuide/guideStep1";
import GuideStep2 from "../pages/contentGuide/guideStep2";
import GuideStep3 from "../pages/contentGuide/guideStep3";
import GuideStep4 from "../pages/contentGuide/guideStep4";
import GuideStep5 from "../pages/contentGuide/guideStep5";

import "../styles/button.css";

export default function Instrumento() {
  const { id } = useParams(); // niño
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Cargar el paso guardado
  useEffect(() => {
    const savedStep = localStorage.getItem(`instrumento-step-${id}`);
    if (savedStep) {
      setStep(parseInt(savedStep, 10));
    }
  }, [id]);

  const handleSiguiente = () => {
    if (step < 5) {
      const newStep = step + 1;
      setStep(newStep);
      localStorage.setItem(`instrumento-step-${id}`, newStep);
    }
  };

  const handleAnterior = () => {
    if (step > 1) {
      const newStep = step - 1;
      setStep(newStep);
      localStorage.setItem(`instrumento-step-${id}`, newStep);
    }
  };

  //flujo de anexos
  const handleCapturar = () => {
    let anexoKey = null;
    switch (step) {
      case 1: anexoKey = "A"; break;
      case 2: anexoKey = "B"; break;
      case 3: anexoKey = "C"; break;
      case 4: anexoKey = "D"; break;
      case 5: anexoKey = "E"; break;
      default: break;
    }

    if (anexoKey) {
      localStorage.setItem(`instrumento-anexo-${id}`, anexoKey);
      // redirige a la vista de anexos y abre el anexo
      navigate(`/anexoshandler/${id}?open=${anexoKey}`);
    }
  };

  const handleGuardarYSalir = () => {
    localStorage.setItem(`instrumento-step-${id}`, step);
    alert(`Paso ${step} guardado para el niño ${id}`);
    navigate("/dashboard");
  };

  const handleTerminar = () => {
    localStorage.removeItem(`instrumento-step-${id}`);
    localStorage.removeItem(`instrumento-anexo-${id}`);
    alert(`Instrumento completado para el niño ${id}`);
    navigate("/dashboard");
  };

  const renderContenido = () => {
    switch (step) {
      case 1: return <GuideStep1 withNavbar={false} />;
      case 2: return <GuideStep2 withNavbar={false} />;
      case 3: return <GuideStep3 withNavbar={false} />;
      case 4: return <GuideStep4 withNavbar={false} />;
      case 5: return <GuideStep5 withNavbar={false} />;
      default: return <p>Paso no disponible</p>;
    }
  };

  return (
    <>
      <Navbar title={`Instrumento para niño ${id}`} />

      <div style={{ padding: "2rem" }}>
        {renderContenido()}

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            {step > 1 && (
              <button
                className="button button-secondary"
                onClick={handleAnterior}
                style={{ marginRight: "1rem" }}
              >
                Paso anterior
              </button>
            )}

            {step < 5 ? (
              <button className="button button-primary" onClick={handleSiguiente}>
                Siguiente paso
              </button>
            ) : (
              <button className="button button-success" onClick={handleTerminar}>
                Terminar
              </button>
            )}

            <button className="button button-primary" onClick={handleCapturar}>
              Capturar resultados
            </button>
          </div>

          <div>
            <button
              className="button button-secondary"
              onClick={handleGuardarYSalir}
            >
              Guardar y salir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
