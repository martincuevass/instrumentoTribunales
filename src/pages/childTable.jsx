import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navBar.jsx';

import '../styles/dashboard.css'; 

export default function ChildTable() {
  const [allRecords, setAllRecords] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error al cargar currentUser:", error);
    }

    try {
      const registrosGuardados = JSON.parse(localStorage.getItem('registrosNiños')) || [];
      setAllRecords(registrosGuardados);
    } catch (error) {
      console.error("Error al cargar los registros:", error);
      setAllRecords([]);
    }
  }, []); 

  // --- 👇 INICIO: NUEVA FUNCIÓN PARA ELIMINAR 👇 ---
  const handleDelete = (idToDelete) => {
    // 1. Pedir confirmación
    if (!window.confirm("¿Estás seguro de que deseas eliminar este registro? Esta acción no se puede deshacer.")) {
      return; // Si el usuario cancela, no hacemos nada
    }

    try {
      // 2. Crear la nueva lista sin el registro eliminado
      const registrosActualizados = allRecords.filter(
        (registro) => registro.id !== idToDelete
      );

      // 3. Actualizar el estado (para que la UI se refresque)
      setAllRecords(registrosActualizados);

      // 4. Actualizar el localStorage
      localStorage.setItem('registrosNiños', JSON.stringify(registrosActualizados));
      
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
      alert("No se pudo eliminar el registro.");
    }
  };
  // --- 👆 FIN: NUEVA FUNCIÓN PARA ELIMINAR 👆 ---


  // --- Funciones auxiliares (sin cambios) ---
  const renderInstrumentoEstado = (row) => {
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
    if (row.resultados === "Completado") {
      return (
        <Link
          to={`/anexoshandler/${row.id}`}
          state={{ viewOnly: true }}
          style={{ color: "green", textDecoration: "underline" }}
        >
          Completado (Consultar)
        </Link>
      );
    }
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
  // --- Fin de funciones auxiliares ---

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

  return (
    <>
      <Navbar title="Todos los Registros" currentUser={currentUser} />
      
      <div className="dashboard-container" style={{paddingTop: '2rem'}}>
        <div className="dashboard-main" style={{display: 'block'}}> 
          <div className="dashboard-table">
            <table>
              <thead>
                <tr>
                  <th>Iniciales del niño</th>
                  <th>Nombre del responsable</th>
                  <th>Instrumento</th>
                  <th>Resultados capturados</th>
                  <th>Usuario (ID)</th> 
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {allRecords.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id || "-"}</td>
                    <td>{row.nombre || "-"}</td>
                    <td style={{ textAlign: "center" }}>{renderInstrumentoEstado(row)}</td>
                    <td style={{ textAlign: "center" }}>{renderResultadosEstado(row)}</td>
                    <td style={{ textAlign: "center" }}>{row.userId || "N/A"}</td> 
                    <td style={{ textAlign: "center" }}>
                      <button 
                        onClick={() => handleDelete(row.id)}
                        style={{
                          backgroundColor: '#dc3545', // Un color rojo para peligro
                          color: 'white',
                          border: 'none',
                          padding: '5px 10px',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
                {allRecords.length === 0 && (
                  <tr><td colSpan={6} style={{ textAlign: "center", padding: "1rem" }}>No hay registros en el sistema</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}