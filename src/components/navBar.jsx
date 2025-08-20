import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HomeIcon from "../assets/home.svg";
import ProfileIcon from "../assets/user.svg";
import "../styles/navbar.css";

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
            </nav>
        </motion.header>
    );
}
