import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function AnexoE() {
  return (
    <>
      <Navbar title="Anexo E" />
      <div className="guideStepContainer">
        <table border={1} className="styledTable">
          <thead>
            <tr>
              <th colSpan={5}>Perfil de apoyos centrados en la Niña, Niño o Adolescente</th>
            </tr>
          </thead>
          <tbody>
            {/* Datos generales */}
            <tr>
              <td colSpan={5}>
                Nombre de la Niña, Niño o Adolescente:{" "}
                <input type="text" disabled className="inputField" /> &nbsp;&nbsp;
                Edad: <input type="number" disabled className="inputField smallInput" /> <br />
                Nombre del perito:{" "}
                <input type="text" disabled className="inputField" /> &nbsp;&nbsp;
                Fecha: <input type="date" disabled className="inputField" />
              </td>
            </tr>
            <tr>
              <th>Infraestructura</th>
              <th>Descripción</th>
              <th>Sí</th>
              <th>No</th>
              <th>N/A</th>
            </tr>

            {/* Infraestructura */}
            <tr>
              <td rowSpan={3}>Infraestructura</td>
              <td>Sala de entrevista en piso 1</td>
              <td><input type="checkbox" disabled /></td>
              <td><input type="checkbox" disabled /></td>
              <td><input type="checkbox" disabled /></td>
            </tr>
            <tr>
              <td>Adecuaciones esenciales de acceso</td>
              <td><input type="checkbox" disabled /></td>
              <td><input type="checkbox" disabled /></td>
              <td><input type="checkbox" disabled /></td>
            </tr>
            <tr>
              <td>Adecuaciones ambientales de temperatura</td>
              <td><input type="checkbox" disabled /></td>
              <td><input type="checkbox" disabled /></td>
              <td><input type="checkbox" disabled /></td>
            </tr>

            {/* Comunicacionales */}
            <tr>
              <th colSpan={5}>Comunicacionales</th>
            </tr>
            {[
              "Descripción de imágenes y espacios",
              "Intérprete en lengua de señas (mexicana)",
              "Intérprete en lengua maya",
              "Persona de confianza",
              "Pictogramas",
              "Materiales de apoyo para la expresión emocional",
              "Estrategias de modelamiento para la identificación personal",
              "Adecuaciones cognitivas en programas de orientación persona",
              "Adecuaciones cognitivas en programas de orientación temporal",
              "Adecuaciones cognitivas en programas de orientación espacial",
              "Adecuaciones cognitivas en programas de atención",
              "Adecuaciones cognitivas en programas de memoria",
              "Uso de aparatos electrónicos con sistemas aumentativos y alternativos de comunicación"
            ].map((desc, index) => (
              <tr key={index}>
                {index === 0 && (
                  <td rowSpan={13}>Comunicacionales</td>
                )}
                <td>{desc}</td>
                <td><input type="checkbox" disabled /></td>
                <td><input type="checkbox" disabled /></td>
                <td><input type="checkbox" disabled /></td>
              </tr>
            ))}

            {/* Durante la diligencia */}
            <tr>
              <th colSpan={5}>Durante el procedimiento de la diligencia</th>
            </tr>
            {[
              "Objeto de seguridad emocional",
              "Intervenciones breves",
              "Apoyo de proximidad",
              "Acondicionar momentos de alimentación",
              "Sala de espera separada de la persona que la acompaña",
              "Informar sobre estatus del medio o disposición final"
            ].map((desc, index) => (
              <tr key={index}>
                {index === 0 && (
                  <td rowSpan={6}>Durante la diligencia</td>
                )}
                <td>{desc}</td>
                <td><input type="checkbox" disabled /></td>
                <td><input type="checkbox" disabled /></td>
                <td><input type="checkbox" disabled /></td>
              </tr>
            ))}

            {/* Descripción */}
            <tr>
              <td colSpan={5} style={{ fontWeight: "bold" }}>
                Descripción de la implementación del apoyo:
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <textarea disabled className="inputField" style={{ width: "100%", height: "80px" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
