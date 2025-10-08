import React, { useState } from "react";
import Navbar from "../components/navBar.jsx";
import "../styles/profilePage.css";
import "../styles/dashboard.css";

const Profile = () => {
  const user = {
    userCode: "12345",
    firstName: "Rodrigo",
    lastName: "Torres",
    email: "nsqk@gmail.com",
    position: "Entrevistador",
    phone: "+52 (999) 123-4567",
  };

  // --- Sample table data ---
  const data = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    childInitials: `AB${i + 1}`,
    responsible: `Responsable ${i + 1}`,
    instrument: `Instrumento ${i + 1}`,
    results: `Resultado ${i + 1}`,
  }));

  // --- Pagination state ---
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div>
      <Navbar title="Perfil" />
      <div className="profile-container">
        {/* User Info Section */}
        <section className="profile-card">
          <h2 className="profile-title">Información del Usuario</h2>
          <div className="profile-details">
            <p><strong>Código de Usuario:</strong> {user.userCode}</p>
            <p><strong>Nombre:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Correo:</strong> {user.email}</p>
            <p><strong>Posición:</strong> {user.position}</p>
            <p><strong>Contacto:</strong> {user.phone}</p>
          </div>
        </section>

        {/* Table Section */}
        <section className="table-section">
          <h2 className="table-title">Historial de Capturas</h2>

          <div className="dashboard-table">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Iniciales del niño</th>
                  <th>Nombre del responsable</th>
                  <th>Instrumento</th>
                  <th>Resultados capturados</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.length > 0 ? (
                  currentRows.map((row) => (
                    <tr key={row.id}>
                      <td>{row.childInitials}</td>
                      <td>{row.responsible}</td>
                      <td>{row.instrument}</td>
                      <td>{row.results}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                      No se encontraron registros :(
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {data.length > 0 && (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              <span>
                Página {currentPage} de {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profile;