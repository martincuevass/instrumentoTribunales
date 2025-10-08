import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import HomeIcon from "../assets/home.svg";
import ProfileIcon from "../assets/user.svg";
import LogoutIcon from "../assets/logout-svgrepo-com.svg";
import "../styles/navBar.css";

// 1. Acepta 'currentUser' como prop
export default function Navbar({ title = "", currentUser, className = "" }) {
  const navigate = useNavigate();

  // 2. Función para cerrar sesión correctamente
  const handleLogout = () => {
    // Limpia el usuario del almacenamiento local
    localStorage.removeItem('currentUser');
    // Redirige a la página de login
    navigate("/");
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className={`navbar ${className}`}
      role="navigation"
    >
      <h1 className="navbarTitle">{title}</h1>

      <div className="navbar-user-section">
        <nav className="navbarIcons">
          <Link
            to="/dashboard"
            aria-label="Ir al dashboard"
            className="navbarIcon"
          >
            <img src={HomeIcon} alt="Inicio" />
          </Link>
          <Link
            to="/profile"
            aria-label="Perfil"
            className="navbarIcon"
          >
            <img src={ProfileIcon} alt="Perfil" />
          </Link>
          {/* 4. El botón ahora usa la función handleLogout */}
          <button
            onClick={handleLogout}
            aria-label="Cerrar Sesión"
            className="navbarIcon logout-button" // Añadida clase para estilos
          >
            <img src={LogoutIcon} alt="Cerrar Sesión" />
          </button>
        </nav>
      </div>
    </motion.header>
  );
}

