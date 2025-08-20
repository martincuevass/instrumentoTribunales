import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";
import casa from "../../assets/casa.png"
import cartas from "../../assets/cartas.png"
import actividad2 from "../../assets/3.4actividad2.png"

import rostros from "../../assets/3.5actividad1.png"
import emociones from "../../assets/emociones.png"

export default function GuideStep3() {
    return (
        <>
            <Navbar title="Paso 3" />
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
                    Utilice el Anexo C para registrar dicha información que contempla dos apartados:
                </p>
                <ul>
                    <li>Datos de preguntas directas a las Niñas, Niños o Adolescentes</li>
                    <li>Datos de situaciones estandarizadas</li>
                </ul>
                <p>
                    Si la Niña, Niño o Adolescente no cuenta con la información solicitada en el Anexo C,
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

                <h2>2. Datos de preguntas directas a las Niñas, Niños y Adolescentes</h2>
                <p>
                    En esta sección, informe a la Niña, Niño o Adolescente que le va a realizar unas preguntas
                    con la finalidad de conocer lo que necesita sobre la manera en la que le gustaría que se
                    llevara a cabo la diligencia. Utilice el Anexo C para registrar la información proporcionada.
                    A partir de las respuestas que brinde la Niña, Niño o Adolescente, tome en cuenta las
                    siguientes sugerencias de apoyos que pueden ser proporcionados y las sugerencias de
                    apoyos que puede explorar.
                </p>

                <h2>Sugerencias de apoyos a proporcionar</h2>
                <p>
                    A continuación, se presenta un listado de apoyos que pueden ser proporcionados a la
                    Niña, Niño o Adolescente a partir de la información detectada en el apartado de preguntas directas del Anexo C. Es importante considerar las características individuales
                    de cada caso:
                </p>
                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente refiera sentirse físicamente mal: cambiar día de la diligencia.</li>
                    <li>En caso de que la Niña, Niño o Adolescente refiera la existencia de un sonido que le genere molestia: adecuaciones sensoriales de sonido.</li>
                    <li>En caso de que la Niña, Niño o Adolescente refiera que la temperatura le genera molestia: adecuaciones sensoriales de temperatura.</li>
                    <li>En caso de que la Niña, Niño o Adolescente refiera querer llevar algún objeto o juguete: permitir el uso de un objeto de seguridad emocional durante su participación en las diligencias.</li>
                    <li>En caso de que la Niña, Niño o Adolescente refiera que necesite compañía de una persona: identificar a la persona de confianza que la Niña, Niño o Adolescente mencionó y permitirle ingresar un momento a la diligencia, en caso de que haya una desregulación emocional que no pueda ser manejada por el personal presente. Es importante considerar adecuar el apoyo a partir de cada caso, priorizando el Interés Superior de la Niñez.</li>
                    <li>En caso de que la Niña, Niño o Adolescente refiera que tiene hambre, sueño o ganas de ir al baño: priorizar la atención a las necesidades básicas, o según sea el caso, agendar la diligencia en un día u horario diferente.</li>
                </ul>

                <h3>Sugerencias de apoyos a explorar</h3>
                <p>A continuación, se presenta un listado de apoyos que se sugieren explorar a partir de la
                    información detectada: </p>
                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente tenga dificultad para contestar las preguntas sobre las emociones: evaluar el uso de materiales de apoyo para la expresión emocional (Ver Apéndice 4).</li>
                </ul>

                <p>
                    Recuerde que, en caso de que identifique un apoyo específico, usted procede a describirlo en el Anexo E.
                </p>

                <h2>3. Datos de situaciones estandarizadas </h2>

                <p>
                    En el presente apartado usted lleva a cabo actividades estandarizadas para conocer las
                    características y apoyos específicos de las Niñas, Niños y Adolescentes. Las actividades
                    que debe realizar son las siguientes:
                </p>

                <p>
                    <strong>3.1 </strong> Valoración del estado mental presente (Ver Anexo C)
                </p>

                <p>
                    <strong>3.2 </strong> Materiales de apoyo visual para brindar información (Ver Apéndice 1)
                </p>

                <p>
                    <strong>3.3 </strong> Estrategias de modelamiento para brindar indicaciones (Ver Apéndice 1)
                </p>

                <p>
                    <strong>3.4 </strong> Pictogramas (Ver Apéndice 3)

                </p>

                <p>
                    <strong>3.5 </strong> Materiales de apoyo para la expresión emocional (Ver Apéndice 4)
                </p>

                <p>
                    En cada una de las actividades antes mencionadas se contempla la descripción de los
                    pasos que debe seguir durante su interacción con las Niñas, Niños o Adolescentes.
                </p>

                <p>
                    Recuerde que en caso de que identifique un apoyo específico para la participación de
                    la Niña, Niño o Adolescente, procede a describirlo en el Anexo E.
                </p>

                <h2>3.1 Valoración del estado mental presente</h2>
                <p>
                    Se comienza con la primera actividad que consiste en realizar algunas preguntas
                    exploratorias con las Niñas, Niños y Adolescentes. En este paso, utilice el Anexo C
                    para registrar la información proporcionada.
                </p>
                <p>
                    Si la Niña, Niño o Adolescente no cuenta con la información solicitada en el Anexo
                    C (valoración del estado mental presente), proceda a escribir “ND” en el apartado
                    correspondiente, lo cual significará que la información no se encuentra disponible.
                </p>
                <p>
                    En caso de que identifique un apoyo específico en este paso, usted procede a describirlo en el Anexo E.
                    Tome en cuenta las siguientes sugerencias de apoyos que pueden ser proporcionados y las sugerencias de apoyos que puede explorar.
                </p>

                <h2>Sugerencias de apoyos a proporcionar</h2>
                <p>
                    A continuación, se presenta un listado de apoyos que pueden ser proporcionados a la
                    Niña, Niño o Adolescente a partir de la información detectada en el Anexo C. Es importante considerar las características individuales de cada caso:
                </p>

                <p>
                    Orientación persona
                </p>

                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente no pueda mencionar su nombre o sobrenombre, sugerir no continuar con la diligencia. </li>
                    <li>En caso de que la Niña, Niño o Adolescente pueda mencionar solo un nombre, parentesco o un sobrenombre de las personas con quienes vive, se considera la respuesta
                        como aceptable.</li>
                    <li>En caso de que la Niña, Niño o Adolescente tenga dificultad para mencionar el nombre, parentesco o sobrenombre de las personas con quienes vive: realizar adecuaciones cognitivas en las preguntas sobre personas.</li>
                </ul>

                <p>
                    Orientación temporal
                </p>

                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente tenga dificultad para contestar las preguntas: realizar adecuaciones cognitivas en las preguntas sobre el tiempo. </li>

                </ul>


                <p>
                    Orientación espacio
                </p>

                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente tenga dificultad para contestar las preguntas: realizar adecuaciones cognitivas en las preguntas sobre lugares </li>

                </ul>


                <p>
                    Registro
                </p>

                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente tenga dificultad para contestar las preguntas: realizar adecuaciones cognitivas a las preguntas: hacer categorías por tipo
                        de situación a explorar y efectuar preguntas breves y sencillas. </li>

                </ul>

                <p>
                    Memoria a corto y largo plazo
                </p>

                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente tenga dificultad para contestar las
                        preguntas:  </li>
                </ul>
                <p>
                    - Brindar contexto antes de preguntar.

                </p>

                <p>
                    - Realizar adecuaciones cognitivas en las preguntas en la orientación temporal.
                </p>

                <h3>Sugerencias de apoyos a explorar</h3>
                <p>A continuación, se presenta un listado de apoyos que se sugieren explorar a partir de la
                    información detectada: </p>

                <p>Registro</p>

                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente tenga dificultad para contestar las preguntas: evaluar el uso de materiales de apoyo visual para brindar información (Ver
                        Apéndice 1)</li>
                </ul>

                <p>Lenguaje (comprensión)</p>

                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente tenga dificultad para seguir alguna
                        indicación:</li>
                </ul>

                <p>- Evaluar el uso de materiales de apoyo visual para brindar información (Ver
                    Apéndice 1)</p>
                <p>- Evaluar el apoyo de estrategias de modelamiento para brindar indicaciones (Ver
                    Apéndice 1)</p>



                <h2>3.2 Materiales de apoyo visual para brindar información</h2>
                <p>En la siguiente actividad, se encuentra una serie de indicaciones para verificar el
                    apoyo de material visual para brindar información en las diligencias por medio de
                    dos posibles escenarios, según la respuesta que brinde la Niña, Niño o Adolescente.
                </p>

                <p>En cada escenario se cuenta con fichas que tienen una imagen para realizar
                    la actividad que se indica. Las fichas se encuentran en el Apéndice 1 de esta Guía.
                    Antes de iniciar la actividad, en cada escenario proporcione una hoja en blanco y un
                    lápiz a la Niña, Niño o Adolescente. A continuación, siga las siguientes indicaciones:</p>

                <p>ESCENARIO 1</p>
                <p>Primero se leen las instrucciones una a una, dándole tiempo a la Niña, Niño o
                    Adolescente para que las siga:
                </p>

                <p>Instrucción con la Niña, Niño o Adolescente: se le muestra la tarjeta junto a una
                    hoja en blanco y se le dice: “aquí hay una tarjeta con una casa. Primero, dibuja la
                    misma casa en la hoja en blanco. Ahora, dibuja una puerta a la casa. Después, dibuja
                    un sol sobre la casa. Luego, dibuja un árbol al lado de la casa”. Se hacen pausas y se
                    espera a que la niña, niño o adolescente lo logre.</p>

                <img src={casa} alt="Casa" />


                <p>Si la Niña, Niño o Adolescente no logra realizar el escenario 1 (una o varias de las
                    instrucciones), se pasa al escenario 2. En caso de lograrlo, no se brinda el apoyo
                    para brindar información y se concluye el presente apartado. </p>

                <p>ESCENARIO 2</p>

                <p>Instrucción con la Niña, Niño o Adolescente: se pone al frente las cuatro tarjetas
                    con una hoja en blanco y se dice: “ahora tenemos cuatro tarjetas que nos ayudan a
                    hacer el dibujo completo de la casa, el sol y el árbol. Primero dibuja la casa; después,
                    la puerta de la casa; luego, el sol sobre la casa; y luego un árbol al lado de la casa”.
                    Brinde tiempo a la niña, niño o adolescente para que lo haga. </p>

                <img src={cartas} alt="Cartas" />

                <p>A partir de las respuestas que dé la Niña, Niño o Adolescente, tome en cuenta las
                    siguientes sugerencias de apoyos para proporcionar y la sugerencia de apoyos para
                    explorar.  </p>

                <h2>Sugerencias de apoyos a proporcionar</h2>
                <p>A continuación, se presenta un listado de apoyos que pueden ser proporcionados a la
                    Niña, Niño o Adolescente a partir de la información detectada. Es importante considerar las características individuales de cada caso:
                </p>
                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente logre realizar la actividad del escenario 2, se entrega el apoyo visual para brindar información para la participación en la
                        diligencia:</li>
                    <p>- En caso de diligencias en el ámbito penal, en el Apéndice 2 puede encontrar el
                        material de apoyo visual para la diligencia de entrevista y examen médico. </p>
                </ul>


                <h3>Sugerencias de apoyos a explorar</h3>

                <p>
                    A continuación, se presenta un listado de apoyos que se sugieren explorar a partir de la
                    información detectada:
                </p>

                <ul>

                    <li>
                        En caso de que la Niña, Niño o Adolescente tenga dificultad para realizar la actividad
                        del escenario 2:
                        <p>- Evaluar el apoyo de estrategias de modelamiento para brindar indicaciones (Ver
                            Apéndice 1)</p>
                    </li>
                </ul>

                <p>Recuerde que, en caso de que identifique un apoyo específico, usted procede a describirlo en el Anexo E.</p>

                <h2>3.3 Estrategias de modelamiento para brindar indicaciones </h2>

                <p>En el siguiente apartado, se verifica el apoyo de estrategias de modelamiento para
                    brindar indicaciones en las diligencias por medio de un escenario estandarizado. En
                    este escenario, se utilizan nuevamente las cuatro fichas empleadas en el inciso anterior, para realizar la actividad que se indica (Ver Apéndice 1). A continuación, siga
                    las siguientes instrucciones:</p>

                <h3>ESCENARIO 1</h3>

                <p>Tome las cuatro tarjetas y coloque una hoja en blanco junto a usted y otra junto a la
                    Niña, Niño o Adolescente. Mencione las instrucciones para realizar el dibujo de la
                    casa paso a paso junto con la Niña, Niño o Adolescente, también describa lo que se
                    está realizando y brinde pausas para que lo realice a su propio ritmo. </p>

                <p>Instrucción con la Niña, Niño o Adolescente: “tengo estas tarjetas que me ayudan a hacer el dibujo completo de la casa, el sol y el árbol. Primero, yo voy hacer el
                    dibujo de la casa en esta hoja en blanco, como está en la tarjeta, mira cómo lo hago.
                    Ahora, intenta hacer el mismo dibujo. Ahora, voy a hacer una puerta en la casa como
                    en la tarjeta. Inténtalo tú. Después, voy a dibujar un sol sobre la casa como en la tarjeta. Ahora, dibújalo tú. Por último, haré un árbol al lado de la casa como en la tarjeta.
                    Ahora, inténtalo tú”. </p>

                <p>A partir de las respuestas que brinde la Niña, Niño o Adolescente, tome en cuenta las siguientes sugerencias de apoyos para proporcionar que se mencionan a
                    continuación. </p>

                <h2>Sugerencias de apoyos a proporcionar</h2>

                <p>A continuación, se presenta un listado de apoyos que pueden ser proporcionados a la
                    Niña, Niño o Adolescente a partir de la información detectada. Es importante considerar las características individuales de cada caso:
                </p>

                <ul>
                    <li> En caso de que la Niña, Niño o Adolescente logre realizar la actividad del escenario
                        1, se entrega el apoyo de estrategias de modelamiento para brindar indicaciones en
                        la diligencia.</li>
                </ul>

                <p>Recuerde que, en caso de que identifique un apoyo específico, usted procede a describirlo en el Anexo E.</p>

                <h2>3.4 Pictogramas </h2>

                <p>En el siguiente apartado, se le pedirá a la Niña, Niño o Adolescente que realice una
                    misma actividad, primero sin el apoyo de pictogramas y después con el apoyo de
                    éstos (Ver Apéndice 3). </p>

                <h3>Actividad 1</h3>
                <p> Se le da una indicación a la Niña, Niño o Adolescente sin el apoyo de pictogramas</p>

                <p>
                    Instrucción para la Niña, Niño o Adolescente: cuéntame tres cosas que haces
                    en la mañana después de levantarte.
                </p>

                <p>Se toma la narración de la Niña, Niño o Adolescente y se valora su fluidez y la riqueza
                    del lenguaje, además se considera si integró en su narración la información solicitada. </p>

                <h3>ACTIVIDAD 2</h3>

                <p>Se despliegan los 10 pictogramas, que serán siempre los mismos</p>

                <p>Instrucción para la Niña, Niño o Adolescente: “aquí verás las imágenes de 10 actividades que solemos realizar después de levantarnos, escoge tres y cuéntame en
                    qué orden las haces tú”. </p>

                <p>A continuación, se presentan los 10 pictogramas (Ver Apéndice 3) tomados del
                    banco de pictogramas validados de libre uso en español (en caso de que requiera
                    utilizar más pictogramas, puede acceder a la siguiente página de internet: https://
                    pictogramas.plenainclusion.org/pictogramas/):</p>

                <img src={actividad2} alt="Actividad2" />

                <p>En esta actividad, se valoran los mismos criterios que en la actividad 1. Si la Niña,
                    Niño o Adolescente se desenvuelve mejor con el apoyo de pictogramas, se le debe
                    ofrecer este apoyo a la Niña, Niño o Adolescente en preguntas complejas. </p>

                <p>A partir de las respuestas que brinde la Niña, Niño o Adolescente, tome en cuenta
                    las siguientes sugerencias de apoyos para proporcionar.
                </p>


                <h2>Sugerencias de apoyos a proporcionar</h2>
                <p>A continuación, se presenta un listado de apoyos que pueden ser proporcionados a la
                    Niña, Niño o Adolescente a partir de la información detectada. Es importante considerar las características individuales de cada caso:</p>
                <ul>
                    <li>En caso de que la Niña, Niño o Adolescente logre realizar la actividad, se le entrega el
                        apoyo de pictogramas para participar en la diligencia (Ver Apéndice 3)</li>
                </ul>

                <p>Recuerde que, en caso de que identifique un apoyo específico, usted procede a describirlo en el Anexo E.</p>

                <h2> 3.5 Materiales de apoyo para la expresión emocional  </h2>
                <p>En esta actividad se utilizarán tarjetas con imágenes de rostros reales y de dibujos
                    de caras para explorar el reconocimiento y la narración emocional de la Niña, Niño o
                    Adolescente. Previamente, se escogen rostros con las emociones de alegría, tristeza, enojo y miedo (Ver Apéndice 4). </p>

                <h3>ACTIVIDAD 1</h3>

                <p>Mostrar las tarjetas con los rostros reales y realizar la pregunta señalada en la instrucción a la Niña, Niño o Adolescente.</p>
                <p>Instrucción para la Niña, Niño o Adolescente: “ahora tenemos cuatro tarjetas
                    con el rostro de personas diferentes, ¿qué crees que está sintiendo la primera persona?” (Se repite la misma pregunta con cada imagen).</p>


                <img src={rostros} alt="Rostros" />


                <h3>ACTIVIDAD 2</h3>
                <p>Mostrar las tarjetas con los dibujos de caras y realizar la pregunta señalada en la
                    instrucción a la Niña, Niño o Adolescente.</p>
                <p> Instrucción para la Niña, Niño o Adolescente: “ahora tenemos otras cuatro tarjetas con los dibujos de unas caras, ¿qué crees que está sintiendo este dibujo? (Se
                    repite la misma pregunta con cada imagen). </p>

                <img src={emociones} alt="Emociones" />

                <p>A partir de las respuestas que brinde la Niña, Niño o Adolescente, tome en cuenta
                    las siguientes sugerencias de apoyos para proporcionar. </p>

                <h2>Sugerencias de apoyos a proporcionar</h2>
                <p>A continuación, se presenta un listado de apoyos que pueden ser proporcionados a la
                    Niña, Niño o Adolescente a partir de la información detectada. Es importante considerar las características individuales de cada caso:</p>

                <ul>
                    <li>
                        En caso de que la Niña, Niño o Adolescente logre realizar la actividad con las tarjetas
                        de rostros reales con un mejor desenvolvimiento, se entregan dichos materiales de
                        apoyo para la expresión emocional en la diligencia (Ver Apéndice 4)
                    </li>

                    <li>
                        En caso de que la Niña, Niño o Adolescente logre realizar la actividad con las tarjetas
                        de dibujos de caras con un mejor desenvolvimiento, se entregan dichos materiales
                        de apoyo para la expresión emocional en la diligencia (Ver Apéndice 4)

                    </li>
                </ul>

                <p>Si la Niña, Niño o Adolescente no consigue nombrar apropiadamente las emociones,
                    dejar una nota sobre la dificultad en el reconocimiento de emociones en el Anexo E.
                    Recuerde que, en caso de que identifique un apoyo específico, usted procede a describirlo en el Anexo E.</p>


            </div>
        </>
    );
}
