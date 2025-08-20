import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function AnexoA() {
  return (
    <>
      <Navbar title="Anexo A" />
      <div className="guideStepContainer">
        <table border={1}>
          <tbody>
            <tr style={{ backgroundColor: "#1f365f", color: "white", textAlign: "center" }}>
              <td colSpan={4}>Revisión del expediente</td>
            </tr>
            <tr style={{ backgroundColor: "#d1d7e0", textAlign: "center" }}>
              <td colSpan={4}>Datos de identificación de la Niña, Niño o Adolescente en el expediente</td>
            </tr>
            <tr>
              <td>Nombre de la Niña, Niño o Adolescente:</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>Edad:</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>Fecha de nacimiento:</td>
              <td>DD</td>
              <td>MM</td>
              <td>AA</td>
            </tr>
            <tr>
              <td>Sexo:</td>
              <td>Mujer: ☐</td>
              <td>Hombre: ☐</td>
              <td>Otro: ☐</td>
            </tr>
            <tr>
              <td>Municipio en el que vive:</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Se reporta alguna condición de salud?:</td>
              <td>No: ☐</td>
              <td colSpan={2}>Sí: ☐ ¿Cuál?:</td>
            </tr>
            <tr>
              <td>¿Se reporta alguna discapacidad?:</td>
              <td>No: ☐</td>
              <td>Sí: ☐ ¿Cuál?:</td>
              <td>
                Intelectual: ☐<br />
                Auditiva: ☐<br />
                Desarrollo: ☐<br />
                Visual: ☐<br />
                Física: ☐<br />
                Psicosocial: ☐<br />
                Cognitiva: ☐
              </td>
            </tr>
            <tr>
              <td>¿Requiere apoyo de intérprete?:</td>
              <td>No: ☐</td>
              <td>Sí: ☐ ¿Cuál?:</td>
              <td>
                Lengua de señas mexicana: ☐<br />
                Maya hablante: ☐<br />
                Otro: ☐__________
              </td>
            </tr>
            <tr>
              <td>Tipo de delito que se investiga:</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Se requiere gestionar una canalización ante una situación de ayuda inmediata?</td>
              <td>No: ☐</td>
              <td colSpan={2}>
                Sí: ☐ ¿Cuál?:<br />
                Atención psicológica por autolesiones o ideación suicida: ☐<br />
                Atención de la NOM 046 por afectaciones de violencia sexual: ☐<br />
                Atención a otros tipos de violencia o vulneración de derechos: ☐
              </td>
            </tr>
            <tr>
              <td>Fecha de aplicación:</td>
              <td>DD</td>
              <td>MM</td>
              <td>AA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
