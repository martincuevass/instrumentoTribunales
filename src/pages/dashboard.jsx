import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/navBar";
import Add from "../components/add";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const location = useLocation();

  // Lógica mejorada para obtener el usuario de forma segura
  const storedUser = localStorage.getItem('currentUser');
  const currentUser = location.state?.user || (storedUser ? JSON.parse(storedUser) : null);

  useEffect(() => {
    // Carga los registros de forma segura
    try {
      const registrosGuardados = JSON.parse(localStorage.getItem('registrosNiños')) || [];
      setData(registrosGuardados);
    } catch (error) {
      console.error("Error al cargar los registros:", error);
      setData([]); // En caso de error, se establece un array vacío
    }
  }, []);

  if (!currentUser) {
    return (
      <div>
        <Navbar title="Error" />
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          No se pudo identificar al usuario. Por favor, <Link to="/">inicia sesión</Link> de nuevo.
        </p>
      </div>
    );
  }

  const registrosDelUsuario = data.filter(
    (registro) => registro.userId === currentUser.id
  );

  const filtered = registrosDelUsuario.filter((row) =>
    (row.id || "").toLowerCase().includes(query.toLowerCase())
  );

  const handleSave = (newChild) => {
    const nuevo = {
      id: newChild.datosIniciales || `Nino-${Date.now()}`,
      nombre: newChild.responsable || "",
      estado: newChild.instrumentoRealizado ? "realizado" : "pendiente",
      resultados: "Pendiente",
      pasoActual: null,
      anexoActual: null,
      userId: newChild.userId,
    };
    const registrosActualizados = [...data, nuevo];
    localStorage.setItem('registrosNiños', JSON.stringify(registrosActualizados));
    setData(registrosActualizados);
  };

  const renderInstrumentoEstado = (row) => {
    // -> CAMBIO REALIZADO AQUÍ <-
    // Ahora, si el estado es 'realizado', también será un enlace para consultar.
    if (row.estado === "realizado") {
      return (
        <Link
          to={`/instrument/${row.id}`}
          style={{ color: "green", textDecoration: "underline" }}
        >
          Realizado (Consultar)
        </Link>
      );
    }

    const linkText = row.pasoActual ? `Continuar en el paso ${row.pasoActual}` : "Instrumento pendiente";
    const linkColor = row.pasoActual ? "#1e325a" : "red";
    
    return (
      <Link
        to={`/instrument/${row.id}`}
        style={{ color: linkColor, textDecoration: "underline" }}
      >
        {linkText}
      </Link>
    );
  };

  const renderResultadosEstado = (row) => {
    if (row.estado === "realizado") return "Completados";
    const linkText = row.anexoActual ? `Continuar en anexo ${row.anexoActual}` : "Anexo pendiente";
    
    return (
      <Link
        to={`/anexoshandler/${row.id}`}
        style={{ color: row.anexoActual ? "#1e325a" : "red", textDecoration: "underline" }}
      >
        {linkText}
      </Link>
    );
  };

  return (
    <>
      <Navbar title="Tablero" currentUser={currentUser} />
      <div className="dashboard-container">
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
                {filtered.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id || "-"}</td>
                    <td>{row.nombre || "-"}</td>
                    <td style={{ textAlign: "center" }}>{renderInstrumentoEstado(row)}</td>
                    <td style={{ textAlign: "center" }}>{renderResultadosEstado(row)}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={4} style={{ textAlign: "center", padding: "1rem" }}>Sin resultados</td></tr>
                )}
              </tbody>
            </table>
          </div>
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
      <Add
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        currentUser={currentUser}
      />
    </>
  );
}

