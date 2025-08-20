import React, { useState } from "react";
import LoginForm from "./loginForm";
import ForgotForm from "./forgotForm";
import "../styles/rightSideStart.css";

export default function RightSideStart() {
  const [showForgot, setShowForgot] = useState(false);

  const handleToggle = () => setShowForgot(prev => !prev);

  return (
    <div className="right-side">
      <div className="auth-card">
        <h1>{showForgot ? "Recuperar contraseña" : "Iniciar sesión"}</h1>

        {showForgot ? (
          <>
            <ForgotForm />
            <button
              type="button"
              className="auth-link"
              onClick={handleToggle}
              style={{ marginTop: "1rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              Volver al inicio de sesión
            </button>
          </>
        ) : (
          <>
            <LoginForm />
            <button
              type="button"
              className="auth-link"
              onClick={handleToggle}
              style={{ marginTop: "1rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              Olvidé mi contraseña
            </button>
          </>
        )}
      </div>
    </div>
  );
}
