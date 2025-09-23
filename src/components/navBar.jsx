import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HomeIcon from "../assets/home.svg";
import ProfileIcon from "../assets/user.svg";
import LogoutIcon from "../assets/logout-svgrepo-com.svg";
import "../styles/navbar.css";
import Profile from "../pages/profile";

export default function Navbar({ title = "", className = "" }) {
    return (
        <motion.header
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className={`navbar ${className}`}
            role="navigation"
        >
            <h1 className="navbarTitle">{title}</h1>
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
                <Link
                    to="/"
                    aria-label="Logout"
                    className="navbarIcon"
                >
                    <img src={LogoutIcon} alt="Perfil" />
                </Link>
            </nav>
        </motion.header>
    );
}
