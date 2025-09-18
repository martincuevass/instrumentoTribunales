// src/views/contentGuide/GuideStep2.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function GuideStep2({ withNavbar = true }) {
    return (
        <>
            {withNavbar && <Navbar title="Paso 2" />}

            <div className="guideStepContainer">
                <h1>PASO 2. VERIFICACIÓN CON LA FAMILIA O PERSONA ACOMPAÑANTE</h1>

                <h2>Instrucciones para la persona que aplicará los instrumentos</h2>
                <p>
                    En el presente apartado, verifique la información con la familia o persona que acompaña
                    a la Niña, Niño o Adolescente a la diligencia. Corrobore y obtenga la información sobre los
                    principales datos de identificación, condición de salud, discapacidad o manera de comunicarse que puedan fortalecer la detección de apoyos específicos.
                </p>
                <p>
                    En este paso, utilice el <Link to="/contentGuide/anexoB">Anexo B</Link> para registrar la información proporcionada por la familia o la persona acompañante.
                </p>
                <p>
                    Si la familia o la persona acompañante no cuenta con la información solicitada en el
                    <Link to="/contentGuide/anexoB"> Anexo B</Link>, proceda a escribir “ND” en el apartado correspondiente, lo cual significará que la
                    información no se encuentra disponible.
                </p>
                <p>
                    En caso de que identifique un apoyo específico con la familia o la persona acompañante, usted procede a describirlo en el <Link to="/contentGuide/anexoE">Anexo E</Link> y considere esta información para entregar
                    los apoyos necesarios al interactuar con la Niña, Niño o Adolescente en el <Link to="/contentGuide/guideStep3">Paso 3</Link> de esta
                    Guía.
                </p>
                <p>
                    Tome en cuenta las siguientes sugerencias de apoyos que pueden ser proporcionados,
                    así como aquellos que se pueden explorar en caso de haber detectado alguna condición
                    de salud relevante para la diligencia, así como discapacidad, dificultad en el habla, requerimiento de intérprete, hambre o sueño.
                </p>

                <h2>Sugerencias de apoyos a proporcionar</h2>
                <p>
                    A continuación, se presenta un listado de apoyos que pueden ser proporcionados a la
                    Niña, Niño o Adolescente a partir de la información detectada en el <Link to="/contentGuide/anexoB">Anexo B</Link>. Es importante considerar las características individuales de cada caso:
                </p>

                <h3>Discapacidad física</h3>
                <ul>
                    <li>Rampas y ascensores</li>
                    <li>Diligencia en una sala ubicada en el primer piso</li>
                    <li>Espacio físico adaptado</li>
                    <li>Sanitarios accesibles</li>
                    <li>Señalética con accesibilidad cognitiva</li>
                </ul>

                <h3>Discapacidad visual</h3>
                <ul>
                    <li>Descripción de imágenes y sucesos</li>
                    <li>Rampas y ascensores</li>
                    <li>Diligencia en una sala ubicada en el primer piso</li>
                    <li>Espacio físico adaptado</li>
                    <li>Sanitarios accesibles</li>
                </ul>

                <h3>Discapacidad intelectual, cognitiva, del desarrollo o dificultades en el habla</h3>
                <ul>
                    <li>Descansos durante la diligencia</li>
                    <li>Persona de confianza</li>
                    <li>Brindar contexto antes de realizar preguntas</li>
                    <li>Objeto de seguridad emocional</li>
                    <li>Intervenciones breves</li>
                    <li>Información en lenguaje claro y lectura sencilla</li>
                    <li>Señalética con accesibilidad cognitiva</li>
                    <li>Adecuaciones sensoriales</li>
                    <li>Adecuaciones de accesibilidad cognitiva en las preguntas</li>
                </ul>

                <h3>Discapacidad auditiva</h3>
                <ul>
                    <li>Intérprete en lengua de señas mexicana</li>
                    <li>Espacio físico adaptado</li>
                    <li>Señalética con accesibilidad cognitiva</li>
                </ul>

                <h3>Discapacidad psicosocial</h3>
                <ul>
                    <li>Descansos durante la diligencia</li>
                    <li>Familiarización previa con el espacio de participación</li>
                    <li>Objeto de seguridad emocional</li>
                    <li>Persona de confianza</li>
                </ul>

                <h3>Epilepsia, convulsiones o hipersensibilidad sensorial</h3>
                <ul>
                    <li>Espacio libre de estímulos</li>
                    <li>Adecuaciones sensoriales</li>
                    <li>Apoyo de paramédicos</li>
                </ul>

                <h3>Mayahablante</h3>
                <ul>
                    <li>Intérprete mayahablante</li>
                    <li>Persona de confianza</li>
                </ul>

                <h3>Dificultad para ir al baño</h3>
                <ul>
                    <li>Descansos durante la diligencia</li>
                    <li>Señalética con accesibilidad cognitiva</li>
                </ul>

                <h3>Necesidades básicas no atendidas</h3>
                <ul>
                    <li>Atender la necesidad de alimentación</li>
                    <li>Cambio de día de la diligencia</li>
                    <li>Agendar en un horario diferente</li>
                </ul>

                <h3>Autolesiones o ideación suicida</h3>
                <ul>
                    <li>Canalizar a atención psicológica</li>
                </ul>

                <h2>Sugerencias de apoyos a explorar</h2>
                <p>
                    A continuación, se presenta un listado de apoyos que se sugieren explorar en el <Link to="/contentGuide/guideStep3">Paso 3 </Link>
                    de la Guía, a partir de la información detectada en el <Link to="/contentGuide/anexoB">Anexo B</Link>:
                </p>

                <h3>Discapacidad intelectual, cognitiva, del desarrollo o dificultades en el habla</h3>
                <ul>
                    <li>Evaluar el uso de materiales de apoyo visual para brindar información (<Link to="/contentGuide/apendice1">Ver Apéndice 1</Link>)</li>
                    <li>Evaluar el uso de pictogramas (<Link to="/contentGuide/apendice2">Ver Apéndice 2</Link>)</li>
                    <li>Evaluar el uso de materiales de apoyo para la expresión emocional (<Link to="/contentGuide/apendice4">Ver Apéndice 4</Link>)</li>
                    <li>Evaluar el apoyo de estrategias de modelamiento para brindar indicaciones (<Link to="/contentGuide/apendice1">Ver Apéndice 1</Link>)</li>
                </ul>

                <h3>Requerimiento de apoyo o dificultad para el reconocimiento, comprensión o control de las emociones</h3>
                <ul>
                    <li>Evaluar el uso de materiales de apoyo para la expresión emocional (<Link to="/contentGuide/apendice4">Ver Apéndice 4</Link>)</li>
                </ul>
            </div>
        </>
    );
}
