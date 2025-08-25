import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function AnexoA() {
  return (
    <>
      <Navbar title="Anexo A" />
      <div className="guideStepContainer">
        <table className="styled-table">
          <tbody>
            <tr>
              <td colSpan={4}>Revisión del expediente</td>
            </tr>
            <tr>
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
              <td>
                Mujer: <input type="checkbox" disabled />
              </td>
              <td>
                Hombre: <input type="checkbox" disabled />
              </td>
              <td>
                Otro: <input type="checkbox" disabled />
              </td>
            </tr>
            <tr>
              <td>Municipio en el que vive:</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Se reporta alguna condición de salud?:</td>
              <td>
                No: <input type="checkbox" disabled />
              </td>
              <td colSpan={2}>
                Sí: <input type="checkbox" disabled /> ¿Cuál?:
              </td>
            </tr>
            <tr>
              <td>¿Se reporta alguna discapacidad?:</td>
              <td>
                No: <input type="checkbox" disabled />
              </td>
              <td>
                Sí: <input type="checkbox" disabled /> ¿Cuál?:
              </td>
              <td>
                Intelectual: <input type="checkbox" disabled /><br />
                Auditiva: <input type="checkbox" disabled /><br />
                Desarrollo: <input type="checkbox" disabled /><br />
                Visual: <input type="checkbox" disabled /><br />
                Física: <input type="checkbox" disabled /><br />
                Psicosocial: <input type="checkbox" disabled /><br />
                Cognitiva: <input type="checkbox" disabled />
              </td>
            </tr>
            <tr>
              <td>¿Requiere apoyo de intérprete?:</td>
              <td>
                No: <input type="checkbox" disabled />
              </td>
              <td>
                Sí: <input type="checkbox" disabled /> ¿Cuál?:
              </td>
              <td>
                Lengua de señas mexicana: <input type="checkbox" disabled /><br />
                Maya hablante: <input type="checkbox" disabled /><br />
                Otro: <input type="checkbox" disabled />
              </td>
            </tr>
            <tr>
              <td>Tipo de delito que se investiga:</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Se requiere gestionar una canalización ante una situación de ayuda inmediata?</td>
              <td>
                No: <input type="checkbox" disabled />
              </td>
              <td colSpan={2}>
                Sí: <input type="checkbox" disabled /> ¿Cuál?:<br />
                Atención psicológica por autolesiones o ideación suicida:{" "}
                <input type="checkbox" disabled /><br />
                Atención de la NOM 046 por afectaciones de violencia sexual:{" "}
                <input type="checkbox" disabled /><br />
                Atención a otros tipos de violencia o vulneración de derechos:{" "}
                <input type="checkbox" disabled />
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
