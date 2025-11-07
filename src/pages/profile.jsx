import React, { useState } from "react";
import Navbar from "../components/navBar.jsx";
import "../styles/profilePage.css";
import "../styles/dashboard.css";
// import {  showData } from "../services/auth.js"; 

const Profile = () => {
  // --- Objeto de usuario modificado ---
  // Estos datos ahora son estáticos, PERO congruentes con tu JSON.
  // He usado a "Martin Cuevas" (administrador) de tu ejemplo.
  // En un futuro, este objeto vendría del estado de autenticación (Context, localStorage, etc.)

  const storedUser = localStorage.getItem('currentUser');
  const currentUser = location.state?.user || (storedUser ? JSON.parse(storedUser) : null);
  //console.log(currentUser);

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

  if(currentUser.tipoUsuario === "administrador"){
    console.log("Es admin")
  }
  else{
    console.log("No es admin")
  }

  // --- Sample table data (Sin cambios) ---
  const data = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    childInitials: `AB${i + 1}`,
    responsible: `Responsable ${i + 1}`,
    instrument: `Instrumento ${i + 1}`,
    results: `Resultado ${i + 1}`,
  }));

  // --- Pagination state (Sin cambios) ---
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
          
          {/* --- Detalles del perfil actualizados --- */}
          {/* Se usan las claves del nuevo objeto 'user' (id, nombreCompleto, tipoUsuario, etc.) */}
          <div className="profile-details">
            <p><strong>Código de Usuario:</strong> {currentUser.id}</p>
            <p><strong>Nombre:</strong> {currentUser.nombreCompleto}</p>
            <p><strong>Correo:</strong> {currentUser.email}</p>
            <p><strong>Tipo de Usuario:</strong> {currentUser.tipoUsuario}</p>
            <p><strong>Contacto:</strong> {currentUser.contacto}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;