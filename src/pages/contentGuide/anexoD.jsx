import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function AnexoD() {
  return (
    <>
      <Navbar title="Anexo D" />
      <div className="guideStepContainer">
        <table>
          <tbody>
            {/* Encabezado principal */}
            <tr style={{ backgroundColor: "#1f365f", color: "white", textAlign: "center" }}>
              <td colSpan={6}>Apoyos generales de participación para Niñas, Niños y Adolescentes</td>
            </tr>

            {/* Subencabezado */}
            <tr style={{ backgroundColor: "#d1d7e0", fontWeight: "bold", textAlign: "center" }}>
              <td colSpan={6}>Apoyos generales de infraestructura</td>
            </tr>

            <tr>
              <td colSpan={3}> Categoria</td>
              <td colSpan={3}> Descripción</td>
            </tr>

            <tr>
              <td rowSpan={2} colSpan={3}>Mobiliario adaptado</td>
              <td colSpan={3}>Sillas que corresponden a las necesidades de altura y espacio.
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Mesas que corresponden a las necesidades de altura y espacio.</td>
            </tr>

            <tr>
              <td rowSpan={4} colSpan={3}>Espacio libre de estimulos</td>
              <td colSpan={3}>Generar un espacio libre de objetos: expedientes, libros, fotografías,
                recipientes, etc.
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Espacio libre de estímulos sensoriales auditivos: música, ruidos,
                conversaciones en tono elevado.</td>
            </tr>
            <tr><td colSpan={3}>Espacio libre de estímulos sensoriales visuales: fotografías, videos,
              vestimenta formal o llamativa, etc.</td></tr>
            <tr><td colSpan={3}>Espacio libre de estímulos sensoriales olfativos: alimentos, perfumes
              fuertes, etc.</td></tr>


            <tr>
              <td rowSpan={3} colSpan={3}>Espacio físico adaptado</td>
              <td colSpan={3}>Espacio físico que considera un lugar de juego
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Espacio físico que considera el tránsito libre de las personas</td>
            </tr>
            <tr><td colSpan={3}>Espacio físico que facilita la lectura de las expresiones faciales por medio de
              la posición de los lugares frente a frente.</td></tr>


            <tr>
              <td rowSpan={3} colSpan={3}>Sanitarios accesibles</td>
              <td colSpan={3}>Los espacios sanitarios contemplan una señalización visible
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Los espacios sanitarios contemplan la distribución de espacio amplio para
                el acceso de las sillas de ruedas.</td>
            </tr>
            <tr><td colSpan={3}>Los espacios sanitarios contemplan tener la puerta, inodoro, lavamanos,
              espejo, accesorios y urinales adaptados a las medidas de las niñas,
              niños y adolescentes</td></tr>


            <tr>
              <td rowSpan={2} colSpan={3}>Señalética con
                accesibilidad cognitiva</td>
              <td colSpan={3}>La señalética que se emplea en la dependencia utiliza imágenes universales
                y sencillas que informan de forma clara los lugares principales en los que
                estará en contacto las niñas, niños y adolescentes durante su participación.
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Los espacios principales para contemplar la señalética son la entrada, sala
                de espera, sala de entrevista, sanitarios, salida.</td>
            </tr>

            {/* Subencabezado */}
            <tr style={{ backgroundColor: "#d1d7e0", fontWeight: "bold", textAlign: "center" }}>
              <td colSpan={6}>Apoyos generales de comunicacion</td>
            </tr>

            <tr>
              <td colSpan={3}>Frases claras y cortas
                con vocabulario fácil de
                comprender</td>
              <td colSpan={3}>El vocabulario de interacción que se emplee con las niñas, niños y
                adolescentes se adecúa a partir de los siguientes puntos:
                <ul>
                  <li>Palabras concretas y en positivo;</li>
                  <li>Verbos en presente y formulados en voz activa;</li>
                  <li>Palabras apropiadas y fáciles de entender;</li>
                  <li>Tecnicismos o extrañas se evitan, o en su caso se explican;</li>
                  <li>El lenguaje sexista y racista se evita.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td colSpan={3}>Frases claras y cortas
                con vocabulario fácil de
                comprender</td>
              <td colSpan={3}>Las frases de interacción que se empleen con las niñas, niños y
                adolescentes se ajustan a partir de los siguientes puntos:
                <ul>
                  <li>Estructura simple: sujeto, verbo, complemento y predicado; </li>
                  <li>Frases con una idea principal; y</li>
                  <li>Emplear menos de 20 palabras.</li>
                </ul>
              </td>
            </tr>


            <tr>
              <td colSpan={3}>Documentos de lectura
                con lenguaje claro
                y simple</td>
              <td colSpan={3}>Los materiales y formatos de lectura que se utilicen con las niñas, niños y
                adolescentes se elaboran con anticipación y contemplan frases claras y
                cortas con vocabulario fácil de comprender (ver recomendaciones de
                frases claras y cortas) y utilizan párrafos con estructura clara a partir de
                las siguientes recomendaciones:
                <ul>
                  <li>Un tema principal por párrafo;</li>
                  <li> Las frases se relacionan entre sí;</li>
                  <li> Utiliza conectores entre las frases y párrafos; y</li>
                  <li> Tono de redacción amistoso y cálido.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td colSpan={3}> Preguntas breves
                y sencillas</td>
              <td colSpan={3}> Las preguntas exploratorias que se empleen con las niñas, niños y
                adolescentes se basan en protocolos estandarizados y especializados
                para la recuperación de relatos.</td>
            </tr>


            <tr>
              <td rowSpan={4} colSpan={3}>Informa y resuelve
                dudas</td>
              <td colSpan={3}>Las niñas, niños y adolescentes reciben información sobre el objetivo
                de la diligencia, quiénes estarán presentes, el papel que desempeñan
                las personas presentes, lo que sucederá durante la diligencia, las
                características de cómo es el lugar y lo esperado de su parte.
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Las niñas, niños y adolescentes reciben información sobre las decisiones
                que se tomen y les involucren.</td>
            </tr>
            <tr><td colSpan={3}>A las niñas, niños y adolescentes se les pregunta si tienen alguna duda
              sobre la situación o información brindada.</td></tr>
            <tr><td colSpan={3}>A las niñas, niños y adolescentes se les informa que pueden expresar las
              dudas que sean necesarias en cualquier momento.</td></tr>

            <tr>
              <td rowSpan={2} colSpan={3}>Relacionarse acorde a
                su desarrollo, gustos
                e intereses</td>
              <td colSpan={3}>La forma de comunicarse con las niñas, niños y adolescentes es construida
                a partir de su desarrollo, gustos e intereses personales (actividades
                recreativas, música, programas, películas, etc.).
              </td>
            </tr>
            <tr>
              <td colSpan={3}>La manera de comunicarse con las niñas, niños y adolescentes evita
                centrarse en características físicas (estatura o apariencia), condiciones
                de salud o discapacidad.</td>
            </tr>

            {/* Subencabezado */}
            <tr style={{ backgroundColor: "#d1d7e0", fontWeight: "bold", textAlign: "center" }}>
              <td colSpan={6}>Apoyos generales de la dinámica del procedimiento de la diligencia
              </td>
            </tr>


            <tr>
              <td colSpan={3}> Familiarización previa
                con el espacio de
                participación</td>
              <td colSpan={3}> Los espacios y las personas que estarán presentes en la diligencia en la que
                participarán las niñas, niños y adolescentes son presentados por el personal
                con anticipación de forma física o por medio de materiales visuales (puede
                utilizar la plataforma de Tribunales Amigables).</td>
            </tr>

            <tr>
              <td colSpan={3}> Continuidad con el
                mismo personal </td>
              <td colSpan={3}> Se procura que el personal que tuvo el primer contacto con las niñas, niños
                o adolescentes, es quien les acompaña a las diligencias en las que se
                requiera su participación. </td>
            </tr>

            <tr>
              <td colSpan={3}> Horario adecuado </td>
              <td colSpan={3}> Los horarios para programar una diligencia con las niñas, niños o
                adolescentes evitan aquellos horarios que involucran la atención a
                necesidades básicas, como lo es la alimentación y el descanso. </td>
            </tr>

            <tr>
              <td colSpan={3}> Cambio de día </td>
              <td colSpan={3}> El cambio de día para la participación de las niñas, niños o adolescentes se
                puede realizar a partir del análisis de cada situación y del criterio del interés
                superior de la niñez, por ejemplo:
                <ul>
                  <li> Si la diligencia se programa en horarios nocturnos; si se encuentra emocionalmente indispuesta; si se encuentra enferma; si requiere mayor tiempo
                    para prepararse emocionalmente para participar en la diligencia, etc.; y</li>
                  <li> También es importante considerar cambiar el día de la diligencia cuando
                    existan conductas de agresividad hacia sí misma u otras personas, así como
                    ante la sospecha de estar en efectos por el consumo de sustancias tóxicas.
                  </li></ul> </td>
            </tr>

            <tr>
              <td rowSpan={2} colSpan={3}>Sala privada</td>
              <td colSpan={3}>La participación de las niñas, niños o adolescentes en una entrevista se
                ealiza en una habitación privada.
              </td>
            </tr>
            <tr>
              <td colSpan={3}>En caso de no contar con un espacio privado, la entrevista se realiza cuando
                no se encuentren otras diligencias simultáneas.</td>
            </tr>

            <tr>
              <td rowSpan={3} colSpan={3}>Descansos</td>
              <td colSpan={3}>Informar antes de iniciar la diligencia, que pueden pedir un receso cuando
                lo requieran.
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Prestar atención a las señales no verbales de las niñas, niños y adolescentes,
                debido a que pueden requerir de un descanso y no expresarlo verbalmente,
                por lo que se puede preguntar explícitamente.</td>
            </tr>

            <tr>
              <td colSpan={3}>Implementar espacios de descanso cada 20 minutos cuando en la participación de las niñas, niños o adolescentes se identifique hiperactividad,
                dificultad de atención o para la regulación emocional.</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
}
