import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function AnexoC() {
  return (
    <>
      <Navbar title="Anexo C" />
      <div className="guideStepContainer">
        <table border={1} className="styledTable">
          <tbody>
            {/* Encabezado principal */}
            <tr style={{ backgroundColor: "#1f365f", color: "white", textAlign: "center" }}>
              <td colSpan={6}>Verificación de datos con la familia o persona acompañante</td>
            </tr>

            {/* Subencabezado */}
            <tr style={{ backgroundColor: "#d1d7e0", fontWeight: "bold", textAlign: "center" }}>
              <td colSpan={6}>Datos de las preguntas directas a la Niña, Niño o Adolescente</td>
            </tr>

            {/* Preguntas */}
            <tr>
              <td>¿Tienes hambre en este momento?:</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td colSpan={4}>Si: <input type="checkbox" disabled /> ¿Cuál? <input type="text" disabled className="inputField" /></td>
            </tr>

            <tr>
              <td>¿Tienes sueño en este momento?:</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td colSpan={4}>Si: <input type="checkbox" disabled /> ¿Cuál? <input type="text" disabled className="inputField" /></td>
            </tr>

            <tr>
              <td>¿Tienes ganas de ir al baño en este momento?:</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td colSpan={4}>Si: <input type="checkbox" disabled /> ¿Cuál? <input type="text" disabled className="inputField" /></td>
            </tr>

            <tr>
              <td>
                ¿Cómo te sientes físicamente (salud)? <br />
                (Para menores de 6 años: ¿te duele algo?)
              </td>
              <td>No: <input type="checkbox" disabled /></td>
              <td colSpan={4}>Si: <input type="checkbox" disabled /> ¿Cuál? <input type="text" disabled className="inputField" /></td>
            </tr>

            <tr>
              <td>¿Existe algún sonido que te genere molestia en la sala?:</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td colSpan={4}>Si: <input type="checkbox" disabled /> ¿Cuál? <input type="text" disabled className="inputField" /></td>
            </tr>

            <tr>
              <td>¿La temperatura de la sala está bien para ti?:</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td colSpan={4}>Si: <input type="checkbox" disabled /> Motivo: <input type="text" disabled className="inputField" /></td>
            </tr>

            <tr>
              <td>¿Se ha identificado alguna condición de salud?:</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td colSpan={4}>Si: <input type="checkbox" disabled /> ¿Cuál? <input type="text" disabled className="inputField" /></td>
            </tr>

            {/* Datos del acompañante */}
            <tr>
              <td>Nombre de familiar o acompañante:</td>
              <td colSpan={5}><input type="text" disabled className="inputField" style={{ width: "100%" }} /></td>
            </tr>

            <tr>
              <td>Relación con la Niña, Niño o Adolescente:</td>
              <td>Madre: <input type="checkbox" disabled /></td>
              <td>Padre: <input type="checkbox" disabled /></td>
              <td>Abuela/abuelo: <input type="checkbox" disabled /></td>
              <td>Hermana/hermano: <input type="checkbox" disabled /></td>
              <td>Otro: <input type="checkbox" disabled /> Describir: <input type="text" disabled className="inputField" /></td>
            </tr>

            {/* Preguntas abiertas */}
            <tr>
              <td colSpan={3}>Cuéntame algo que te haga sentir feliz:</td>
              <td colSpan={3}><textarea disabled className="inputField" style={{ width: "100%", height: "60px" }} /></td>
            </tr>

            <tr>
              <td colSpan={3}>Cuéntame, ¿cómo te das cuenta que otra persona está feliz?:</td>
              <td colSpan={3}><textarea disabled className="inputField" style={{ width: "100%", height: "60px" }} /></td>
            </tr>

            <tr>
              <td colSpan={3}>Cuéntame, ¿qué cosas haces cuando te sientes feliz?:</td>
              <td colSpan={3}><textarea disabled className="inputField" style={{ width: "100%", height: "60px" }} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
