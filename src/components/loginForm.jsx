import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import "../styles/authForms.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = login(email, password);

    if (userData) {
      console.log("Usuario autenticado:", userData);

      // 1. GUARDA EL USUARIO EN LOCALSTORAGE
      // Lo convertimos a string porque localStorage solo guarda texto.
      localStorage.setItem('currentUser', JSON.stringify(userData));

      // 2. Redirige al dashboard.
      // Mantenemos el state para una carga inicial más rápida.
      navigate("/dashboard", { state: { user: userData } });
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <input
        type="email"
        className="auth-input"
        placeholder="Correo electrónico"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="auth-input"
        placeholder="Contraseña"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="auth-button">Iniciar sesión</button>
    </form>
  );
}