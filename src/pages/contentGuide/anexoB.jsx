import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function AnexoB({ editable = false, withNavbar = true }) {
  return (
    <>
      {withNavbar && <Navbar title="Anexo B" />}
      <div className="guideStepContainer">
        <table>
          <tbody>
            {/* Encabezado principal */}
            <tr style={{ backgroundColor: "#1f365f", color: "white", textAlign: "center" }}>
              <td colSpan={6}>Verificación de datos con la familia o persona acompañante</td>
            </tr>

            {/* Subencabezado */}
            <tr style={{ backgroundColor: "#d1d7e0", fontWeight: "bold", textAlign: "center" }}>
              <td colSpan={6}>Información de la familia o persona acompañante</td>
            </tr>

            <tr>
              <td>Nombre de familiar o acompañante:</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>Relación con la Niña, Niño o Adolescente:</td>
              <td>
                Madre: <input type="checkbox" disabled />
              </td>
              <td>
                Padre: <input type="checkbox" disabled />
              </td>
              <td>
                Abuela/abuelo: <input type="checkbox" disabled />
              </td>
              <td>
                Hermana/hermano: <input type="checkbox" disabled />
              </td>
              <td>
                Otro: <input type="checkbox" disabled /> Describir:
              </td>
            </tr>

            {/* Subencabezado */}
            <tr style={{ backgroundColor: "#d1d7e0", fontWeight: "bold", textAlign: "center" }}>
              <td colSpan={6}>Información de la Niña, Niño o Adolescente</td>
            </tr>

            <tr>
              <td>Nombre de la Niña, Niño o Adolescente:</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>Edad:</td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td>Fecha de nacimiento:</td>
              <td>DD</td>
              <td>MM</td>
              <td>AA</td>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <td>Sexo:</td>
              <td>Mujer: <input type="checkbox" disabled /></td>
              <td>Hombre: <input type="checkbox" disabled /></td>
              <td>Otro: <input type="checkbox" disabled /></td>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <td>¿Asiste a la escuela?:</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> ¿Qué grado escolar cursa?</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Se ha identificado alguna condición de salud?:</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> ¿Cuál?</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Se requiere apoyo de paramédicos en la diligencia?</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> Motivo:</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Asiste a terapia psicológica?</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> Motivo:</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Asiste a atención psiquiátrica?</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> Motivo/Diagnóstico:</td>
              <td>Uso de medicamento</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> ¿Cuál?</td>
            </tr>
            <tr>
              <td>¿Se ha identificado algún tipo de discapacidad?</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> ¿Cuál?</td>
              <td colSpan={3}>
                Intelectual: <input type="checkbox" disabled /> <br />
                Auditiva: <input type="checkbox" disabled /> <br />
                Desarrollo: <input type="checkbox" disabled /> <br />
                Visual: <input type="checkbox" disabled /> <br />
                Física: <input type="checkbox" disabled /> <br />
                Psicosocial: <input type="checkbox" disabled /> <br />
                Cognitiva: <input type="checkbox" disabled />
              </td>
            </tr>
            <tr>
              <td>¿La Niña, Niño o Adolescente tiene alguna dificultad en el control para la ida al baño?</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /></td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Se ha identificado alguna dificultad en el habla?</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> ¿Cuál?</td>
              <td colSpan={3}></td>
            </tr>
            <tr>
              <td>¿Requiere apoyo de intérprete?</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> ¿Cuál?</td>
              <td colSpan={3}>
                Lengua de señas mexicana: <input type="checkbox" disabled /> <br />
                Maya hablante: <input type="checkbox" disabled /> <br />
                Otro: <input type="checkbox" disabled />
              </td>
            </tr>

            {/* Subencabezado */}
            <tr style={{ backgroundColor: "#d1d7e0", fontWeight: "bold", textAlign: "center" }}>
              <td colSpan={6}>Información de la Niña, Niño o Adolescente</td>
            </tr>

            <tr>
              <td>¿Considera que la Niña, Niño o Adolscente pueda tener hambre en este momento?: (en caso de ser ese mismo día la diligencia)</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /> ¿Cuál?</td>
              <td colSpan={3}></td>
            </tr>

            <tr>
              <td>¿Considera que la Niña, Niño o Adolscente pueda tener sueño en este momento?: (en caso de ser ese mismo día la diligencia)</td>
              <td>No: <input type="checkbox" disabled /> Motivo</td>
              <td>Si: <input type="checkbox" disabled /> Motivo</td>
              <td colSpan={3}></td>
            </tr>


            <tr>
              <td rowSpan={2}>¿La Niña, Niño o Adolescente reconoce las emociones de otras personas? (por ejemplo, cuando están felices)</td>
              <td>Le es posible: <input type="checkbox" disabled /></td>
              <td>Le es posible con apoyo: <input type="checkbox" disabled /></td>
              <td>Tiene dificultad: <input type="checkbox" disabled /></td>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <td colSpan={5}>Describa su respuesta:</td>
            </tr>


            <tr>
              <td rowSpan={2}>¿La Niña, Niño o Adolescente sintoniza las emociones de otras personas? (por ejemplo, si alguien está asustado)</td>
              <td>Le es posible: <input type="checkbox" disabled /></td>
              <td>Le es posible con apoyo: <input type="checkbox" disabled /></td>
              <td>Tiene dificultad: <input type="checkbox" disabled /></td>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <td colSpan={5}>Describa su respuesta:</td>
            </tr>


            <tr>
              <td rowSpan={2}>¿La Niña, Niño o Adolescente expresa sus emociones con otras personas? (por ejemplo, cuando está enojado[a])</td>
              <td>Le es posible: <input type="checkbox" disabled /></td>
              <td>Le es posible con apoyo: <input type="checkbox" disabled /></td>
              <td>Tiene dificultad: <input type="checkbox" disabled /></td>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <td colSpan={5}>Describa su respuesta:</td>
            </tr>


            <tr>
              <td rowSpan={2}>¿La Niña, Niño o Adolescente demuestra regulación en sus emociones? (por ejemplo, cuando está triste)</td>
              <td>Le es posible: <input type="checkbox" disabled /></td>
              <td>Le es posible con apoyo: <input type="checkbox" disabled /></td>
              <td>Tiene dificultad: <input type="checkbox" disabled /></td>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <td colSpan={5}>Describa su respuesta:</td>
            </tr>


            <tr>
              <td rowSpan={2}>¿Ha abordado el motivo de la diligencia con la Niña, Niño o Adolescente?</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /></td>
              <td colSpan={3}>Describa la reacción cuando abordó el tema:</td>
            </tr>
            <tr>
              <td colSpan={5}></td>
            </tr>


            <tr>
              <td rowSpan={2}>¿La Niña, Niño o Adolescente presenta autolesiones o ideación suicida?</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /></td>
              <td colSpan={3}>Describa su respuesta:</td>
            </tr>
            <tr>
              <td colSpan={5}></td>
            </tr>


            <tr>
              <td rowSpan={2}>¿Conoce los gustos e intereses de la Niña, Niño o Adolescente? (películas, personajes, etc.)</td>
              <td>No: <input type="checkbox" disabled /></td>
              <td>Si: <input type="checkbox" disabled /></td>
              <td colSpan={3}>Describa su respuesta:</td>
            </tr>
            <tr>
              <td colSpan={5}></td>
            </tr>


            <tr>
              <td colSpan={3
              }>
                Observaciones generales de la conducta de la Niña, Niño o Adolescente en la sala de espera o en familia:
              </td>
              <td colSpan={3}></td>
            </tr>


            <tr>
              <td>Fecha de aplicación:</td>
              <td>DD</td>
              <td>MM</td>
              <td>AA</td>
              <td colSpan={2}></td>
            </tr>


          </tbody>
        </table>
      </div>
    </>
  );
}
