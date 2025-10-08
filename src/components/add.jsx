import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/add.css";

// 1. Recibe 'currentUser' en las props, junto a los demás
export default function Add({ show, onClose, onSave, currentUser }) {
  const [datosIniciales, setDatosIniciales] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [responsable, setResponsable] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [contacto, setContacto] = useState("");
  const [instrumentoRealizado, setInstrumentoRealizado] = useState(false);

  if (!show) return null;

  const handleDatosInicialesChange = (e) => {
    const value = e.target.value;
    
    // Usamos una expresión regular para permitir solo letras (A-Z, a-z).
    // La longitud ya está limitada a 4 por el atributo maxLength en el input.
    if (/^[a-zA-Z]*$/.test(value)) {
      // Convertimos a mayúsculas para mantener consistencia y actualizamos el estado.
      setDatosIniciales(value.toUpperCase());
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      datosIniciales,
      fechaNacimiento,
      responsable,
      municipio,
      contacto,
      instrumentoRealizado,
      userId: currentUser.id, // 2. Añade el ID del usuario al objeto que se guarda
    });
    // Limpieza de los campos del formulario
    setDatosIniciales("");
    setFechaNacimiento("");
    setResponsable("");
    setMunicipio("");
    setContacto("");
    setInstrumentoRealizado(false);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Registrar niño</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          {/* El resto de tu formulario no cambia */}
<div className="form-group">
  <label htmlFor="datosIniciales">Datos iniciales del niño:</label>
  <input
    id="datosIniciales"
    type="text"
    value={datosIniciales}
    // 👇 CAMBIOS AQUÍ 👇
    onChange={handleDatosInicialesChange} // Usar la nueva función
    maxLength="4"                       // Limitar la longitud a 4
    required
  />
</div>
          <div className="form-group">
            <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
            <input
              id="fechaNacimiento"
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="responsable">Nombre del responsable:</label>
            <input
              id="responsable"
              type="text"
              value={responsable}
              onChange={(e) => setResponsable(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="municipio">Municipio:</label>
            <input
              id="municipio"
              type="text"
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
              required
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="contacto">Contacto del responsable:</label>
            <input
              id="contacto"
              type="text"
              value={contacto}
              onChange={(e) => setContacto(e.target.value)}
              required
            />
          </div>
          <div className="form-group full-width checkbox-group">
            <input
              id="instrumento"
              type="checkbox"
              checked={instrumentoRealizado}
              onChange={(e) => setInstrumentoRealizado(e.target.checked)}
            />
            <label htmlFor="instrumento">¿Ya se ha realizado el instrumento?</label>
          </div>
          <div className="modal-buttons full-width">
            <button type="submit" className="accept">Guardar</button>
            <button type="button" className="cancel" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// 3. Actualiza los propTypes para incluir currentUser
Add.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};
