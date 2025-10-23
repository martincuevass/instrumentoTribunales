// src/components/navBar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // <-- Aquí está el 'useNavigate' que faltaba
import { motion } from "framer-motion";

// El hook de autenticación que creamos
import { useAuth } from '../hooks/useAuth'; 

// Tus íconos (asumiendo que están en la carpeta 'assets' un nivel arriba)
import HomeIcon from "../assets/home.svg";
import ProfileIcon from "../assets/user.svg";
import LogoutIcon from "../assets/logout-svgrepo-com.svg";

// Tus estilos
import "../styles/navBar.css";

export default function Navbar({ title = "", className = "" }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // <--- Aquí obtienes el usuario

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Si no hay usuario, solo mostramos el título
  if (!user) {
    return (
      <header className={`navbar ${className}`} role="navigation">
        <h1 className="navbarTitle">{title}</h1>
      </header>
    );
  }

  // Si hay usuario, mostramos el título y la navegación con íconos
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className={`navbar ${className}`}
      role="navigation"
    >
      <h1 className="navbarTitle">{title}</h1>

      {/* 👇 La sección de usuario ahora solo contiene la navegación */}
      <div className="navbar-user-section">
        <nav className="navbarIcons">
          {/* 1. Ícono de Home */}
          <Link
            to="/dashboard"
            aria-label="Ir al dashboard"
            className="navbarIcon"
          >
            <img src={HomeIcon} alt="Inicio" />
          </Link>

          {/* 2. Ícono de Perfil (como estaba antes) */}
          <Link
            to="/profile"
            aria-label="Perfil"
            className="navbarIcon"
          >
            <img src={ProfileIcon} alt="Perfil" />
          </Link>

          {/* 3. Botón de Logout */}
          <button
            onClick={handleLogout}
            aria-label="Cerrar Sesión"
            className="navbarIcon"
          >
            <img src={LogoutIcon} alt="Cerrar Sesión" />
          </button>
        </nav>
      </div>
    </motion.header>
  );
}