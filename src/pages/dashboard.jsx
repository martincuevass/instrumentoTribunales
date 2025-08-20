import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navBar";
import "../styles/dashboard.css";


export default function Dashboard() {
  const [query, setQuery] = useState("");

  // datos de prueba
  const data = [
    { id: "abcd", nombre: "Responsable A", estado: "+" },
    { id: "efgh", nombre: "Responsable B", estado: "+" },
    { id: "ijk", nombre: "Responsable C", estado: "+" },
    { id: "lmn", nombre: "Responsable D", estado: "+" },
    { id: "opq", nombre: "Responsable E", estado: "+" },
  ];

  const filtered = data.filter((row) =>
    row.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar title="Tablero" />
      <div className="dashboard-container">
        <div className="dashboard-controls">
          <input
            type="text"
            placeholder="Buscar niño..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Link to="/registrar" className="register-button">
            Registrar
          </Link>

        </div>

        <div className="dashboard-main">
          <div className="dashboard-table">
            <table>
              <thead>
                <tr>
                  <th>Iniciales del niño</th>
                  <th>Nombre del responsable</th>
                  <th>Desplegar información</th>
                </tr>
              </thead>
              <tbody>

                {filtered.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.nombre}</td>
                    <td>{row.estado}</td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={3} style={{ textAlign: "center", padding: "1rem" }}>
                      Sin resultados
                    </td>
                  </tr>
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
              <li><Link to="">Apéndice 1 – Imágenes para evaluar uso de materiales de apoyo visual</Link></li>
              <li><Link to="">Apéndice 2 – Material de apoyo visual para brindar información</Link></li>
              <li><Link to="">Apéndice 3 – Imágenes para evaluar uso de pictogramas</Link></li>
              <li><Link to="">Apéndice 4 – Imágenes para evaluar materiales de apoyo para la expresión emocional</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
