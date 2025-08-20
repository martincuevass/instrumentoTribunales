import React, { useState } from "react";
import "../styles/authForms.css";

export default function ForgotForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar enlace de recuperación
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

      <button type="submit" className="auth-button">Enviar enlace</button>
    </form>
  );
}
