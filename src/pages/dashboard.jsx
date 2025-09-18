import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navBar";
import Add from "../components/add";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Datos iniciales
  const [data, setData] = useState([
    { 
      id: "abcd", 
      nombre: "Responsable A", 
      estado: "pendiente", 
      resultados: "Pendiente",
      pasoActual: null,   // paso en el que va (null = pendiente, 1–5)
      anexoActual: null   // anexo en el que va (null = pendiente, A–E)
    }
  ]);

  // Filtro de búsqueda
  const filtered = data.filter((row) =>
    (row.id || "").toLowerCase().includes(query.toLowerCase())
  );

  // Función que recibe los datos desde Add.jsx
  const handleSave = (newChild) => {
    const nuevo = {
      id: newChild.datosIniciales || "",
      nombre: newChild.responsable || "",
      estado: newChild.instrumentoRealizado ? "realizado" : "pendiente",
      resultados: "-",
      pasoActual: null,
      anexoActual: null,
    };
    setData((prev) => [...prev, nuevo]);
  };

  // Estado del instrumento
  const renderInstrumentoEstado = (row) => {
    if (row.estado === "realizado") return "Realizado";

    if (!row.pasoActual) {
      return (
        <Link
          to={`/instrument/${row.id}`}
          style={{ color: "red", textDecoration: "underline" }}
        >
          Instrumento pendiente
        </Link>
      );
    }

    return (
      <Link
        to={`/contentGuide/GuideStep${row.pasoActual}`}
        style={{ color: "#1e325a", textDecoration: "underline" }}
      >
        Continuar en el paso {row.pasoActual}
      </Link>
    );
  };

// Estado de los anexos → ahora va en "Resultados capturados"
const renderResultadosEstado = (row) => {
  if (row.estado === "realizado") return "Completados";

  if (!row.anexoActual) {
    return (
      <Link
        to={`/instrument/${row.id}`}
        style={{ color: "red", textDecoration: "underline" }}
      >
        Anexo pendiente
      </Link>
    );
  }

  return (
    <Link
      to={`/contentGuide/anexo${row.anexoActual}`}
      style={{ color: "#1e325a", textDecoration: "underline" }}
    >
      Continuar en anexo {row.anexoActual}
    </Link>
  );
};

  return (
    <>
      <Navbar title="Tablero" />

      <div className="dashboard-container">
        {/* Barra de búsqueda y botón registrar */}
        <div className="dashboard-controls">
          <input
            type="text"
            placeholder="Buscar niño..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            className="register-button"
            onClick={() => setShowModal(true)}
          >
            Registrar
          </button>
        </div>

        {/* Tabla principal */}
        <div className="dashboard-main">
          <div className="dashboard-table">
            <table>
              <thead>
                <tr>
                  <th>Iniciales del niño</th>
                  <th>Nombre del responsable</th>
                  <th>Instrumento</th>
                  <th>Resultados capturados</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, i) => (
                  <tr key={i}>
                    <td>{row.id || "-"}</td>
                    <td>{row.nombre || "-"}</td>
                    <td style={{ textAlign: "center" }}>{renderInstrumentoEstado(row)}</td>
                    <td style={{ textAlign: "center" }}>{renderResultadosEstado(row)}</td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ textAlign: "center", padding: "1rem" }}>
                      Sin resultados
                    </td>
                  </tr>
                )}

                <tr>
                  <td colSpan={4} style={{ textAlign: "center", padding: "1rem" }}>
                    <Link
                      to="/childTable"
                      style={{ textDecoration: "underline", color: "#1e325a" }}
                    >
                      Ver todo
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Menú lateral */}
          <div className="dashboard-steps">
            <h2>CONSULTAR INSTRUMENTO</h2>
            <ul>
              <li><Link to="/contentGuide/GuideStep1">Paso 1 – Revisión del Expediente</Link></li>
              <li><Link to="/contentGuide/anexoA">Anexo A – Revisión del Expediente</Link></li>
              <li><Link to="/contentGuide/GuideStep2">Paso 2 – Verificación con la familia o persona acompañante</Link></li>
              <li><Link to="/contentGuide/anexoB">Anexo B – Verificación con la familia o persona acompañante</Link></li>
              <li><Link to="/contentGuide/GuideStep3">Paso 3 – Verificación directa con la niña, niño o adolescente</Link></li>
              <li><Link to="/contentGuide/anexoC">Anexo C – Verificación directa con la niña, niño o adolescente</Link></li>
              <li><Link to="/contentGuide/GuideStep4">Paso 4 – Apoyos generales de participación para niñas, niños y adolescentes</Link></li>
              <li><Link to="/contentGuide/anexoD">Anexo D – Apoyos generales de participación para Niñas, Niños y Adolescentes</Link></li>
              <li><Link to="/contentGuide/GuideStep5">Paso 5 – Perfil de apoyos centrados en la Niña, Niño o Adolescente</Link></li>
              <li><Link to="/contentGuide/anexoE">Anexo E – Perfil de apoyos centrados en la Niña, Niño o Adolescente</Link></li>
              <li><Link to="/contentGuide/apendice1">Apéndice 1 – Imágenes para evaluar uso de materiales de apoyo visual</Link></li>
              <li><Link to="/contentGuide/apendice2">Apéndice 2 – Material de apoyo visual para brindar información</Link></li>
              <li><Link to="/contentGuide/apendice3">Apéndice 3 – Imágenes para evaluar uso de pictogramas</Link></li>
              <li><Link to="/contentGuide/apendice4">Apéndice 4 – Imágenes para evaluar materiales de apoyo para la expresión emocional</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal de registro */}
      <Add
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
      />
    </>
  );
}
