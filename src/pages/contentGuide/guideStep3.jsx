import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";
import casa from "../../assets/casa.png";
import cartas from "../../assets/cartas.png";
import actividad2 from "../../assets/3.4actividad2.png";
import rostros from "../../assets/3.5actividad1.png";
import emociones from "../../assets/emociones.png";

export default function GuideStep3({ withNavbar = true }) {
  return (
    <>
      {withNavbar && <Navbar title="Paso 3" />}
      <div className="guideStepContainer">
        <h1>PASO 3. VERIFICACIÓN DIRECTA CON LA NIÑA, NIÑO O ADOLESCENTE</h1>

        <h2>Instrucciones para la persona que aplicará los instrumentos</h2>
        <p>
          En el paso 3, complemente la información obtenida en los pasos previos con los datos que
          brinden las Niñas, Niños y Adolescentes en la interacción directa. Verifique los apoyos
          específicos necesarios para su participación a partir de las características y necesidades
          individuales que se obtienen.
        </p>
        <p>
          Utilice el <Link to="/contentGuide/anexoC">Anexo C</Link> para registrar dicha información que contempla dos apartados:
        </p>
        <ul>
          <li>Datos de preguntas directas a las Niñas, Niños o Adolescentes</li>
          <li>Datos de situaciones estandarizadas</li>
        </ul>
        <p>
          Si la Niña, Niño o Adolescente no cuenta con la información solicitada en el <Link to="/contentGuide/anexoC">Anexo C</Link>,
          proceda a escribir “ND” en el apartado correspondiente, lo cual significará que la información no se encuentra disponible.
        </p>

        <h2>1. Pautas para un acercamiento amigable con la Niña, Niño o Adolescente</h2>
        <p>
          En el presente apartado, usted se basa en una serie de pautas para realizar un acercamiento amigable con la Niña, Niño o Adolescente:
        </p>
        <ul>
          <li>
            <strong>Presentación:</strong> en el primer punto, usted se presenta con la Niña, Niño o Adolescente,
            brindando su nombre y mencionando su profesión. Luego le explica que su función consiste en conversar con las Niñas, Niños y Adolescentes. Seguidamente, le pregunta el
            nombre a la Niña, Niño o Adolescente y la manera en la que le gustaría que le llamen.
          </li>
          <li>
            <strong>Motivo de la diligencia:</strong> en el segundo punto, le explica a la Niña, Niño o Adolescente el
            objetivo de la diligencia, mencionando que es un espacio para saber cómo es él o ella, por
            lo que realizarán algunas actividades y preguntas con la finalidad de conocerle un poco
            mejor ante situaciones específicas.
          </li>
          <li>
            <strong>Reglas básicas:</strong> en el tercer punto, le indica las reglas básicas de la diligencia, de manera que conozca la dinámica general sobre cómo será la conversación entre ambas personas. Las reglas básicas son:
            <ul>
              <li>Si la Niña, Niño o Adolescente no entiende alguna pregunta, puede pedir que se le explique las veces que sean necesarias.</li>
              <li>Si la Niña, Niño o Adolescente no conoce la respuesta, puede decir que no sabe.</li>
              <li>Si la Niña, Niño o Adolescente no recuerda la respuesta, puede decir que no se acuerda.</li>
              <li>Si la Niña, Niño o Adolescente requiere una pausa, puede solicitar un descanso cuando lo necesite.</li>
              <li>Si usted se equivoca al realizar una pregunta o comentario, la Niña, Niño o Adolescente le puede mencionar que eso no es correcto.</li>
            </ul>
          </li>
          <li>
            <strong>Rapport:</strong> para el establecimiento de una comunicación fluida y efectiva, antes de comenzar con las preguntas, invite a la Niña, Niño o Adolescente a hablar sobre distintos temas de su interés, a fin de favorecer el ambiente de seguridad y confianza necesaria (por ejemplo: tiempo libre, deporte, música, programas de televisión, películas, etc.).
          </li>
          <li>
            <strong>Transición a las actividades de detección de apoyos:</strong> le informa a la Niña, Niño o Adolescente que comenzará a explicarle la primera actividad que realizarán, por lo que le recuerda de forma general, las reglas básicas. En caso de ser necesario, indique a la Niña, Niño o Adolescente que las actividades durarán 30 minutos aproximadamente y utilice como apoyo concreto un reloj en el que le muestre a qué hora terminará.
          </li>
        </ul>

        <h2>2. Datos de preguntas directas a la Niña, Niño o Adolescente</h2>
        <p>
          En esta sección, informe a la Niña, Niño o Adolescente que le va a realizar unas preguntas
          con la finalidad de conocer lo que necesita sobre la manera en la que le gustaría que se
          llevara a cabo la diligencia. Utilice el <Link to="/contentGuide/anexoC">Anexo C</Link> para registrar la información proporcionada.
        </p>

        <h2>Sugerencias de apoyos a proporcionar</h2>
        <ul>
          <li>Si refiere sentirse físicamente mal: cambiar día de la diligencia.</li>
          <li>Si refiere molestia por sonidos: adecuaciones sensoriales de sonido.</li>
          <li>Si refiere molestia por temperatura: adecuaciones sensoriales de temperatura.</li>
          <li>Si quiere llevar un objeto: permitir uso de objeto de seguridad emocional.</li>
          <li>Si necesita compañía de una persona: permitir ingreso momentáneo según caso (priorizando Interés Superior de la Niñez).</li>
          <li>Si tiene hambre, sueño o ganas de ir al baño: atender necesidades básicas o re-agendar diligencia.</li>
        </ul>

        <h3>Sugerencias de apoyos a explorar</h3>
        <ul>
          <li>Si tiene dificultad para contestar preguntas sobre emociones: evaluar uso de materiales de apoyo para expresión emocional (<Link to="/contentGuide/apendice4">Apéndice 4</Link>).</li>
        </ul>

        <p>Recuerde que, en caso de identificar un apoyo específico, describirlo en el <Link to="/contentGuide/anexoE">Anexo E</Link>.</p>

        <h2>3. Datos de situaciones estandarizadas</h2>
        <p>Las actividades son las siguientes:</p>
        <ul>
          <li>3.1 Valoración del estado mental presente (<Link to="/contentGuide/anexoC">Anexo C</Link>)</li>
          <li>3.2 Materiales de apoyo visual para brindar información (<Link to="/contentGuide/apendice1">Apéndice 1</Link>)</li>
          <li>3.3 Estrategias de modelamiento para brindar indicaciones (<Link to="/contentGuide/apendice1">Apéndice 1</Link>)</li>
          <li>3.4 Pictogramas (<Link to="/contentGuide/apendice3">Apéndice 3</Link>)</li>
          <li>3.5 Materiales de apoyo para la expresión emocional (<Link to="/contentGuide/apendice4">Apéndice 4</Link>)</li>
        </ul>

        <h2>3.2 Materiales de apoyo visual</h2>
        <p>Se proporcionan dos escenarios con fichas (Ver <Link to="/contentGuide/apendice1">Apéndice 1</Link>):</p>
        <p>ESCENARIO 1</p>
        <img src={casa} alt="Casa" />
        <p>ESCENARIO 2</p>
        <img src={cartas} alt="Cartas" />

        <h2>3.4 Pictogramas</h2>
        <img src={actividad2} alt="Actividad2" />

        <h2>3.5 Materiales de apoyo para la expresión emocional</h2>
        <img src={rostros} alt="Rostros" />
        <img src={emociones} alt="Emociones" />

        <p>Recuerde que los apoyos específicos detectados se registran en el <Link to="/contentGuide/anexoE">Anexo E</Link>.</p>
      </div>
    </>
  );
}
