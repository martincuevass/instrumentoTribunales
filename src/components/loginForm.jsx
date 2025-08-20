import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../services/auth";
import "../styles/authForms.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateLogin(email, password)) {
      //Reemplazar para la auentificación
      navigate("/dashboard");
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
