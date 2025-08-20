import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function GuideStep4() {
    return (
        <>
            <Navbar title="Paso 4" />
            <div className="guideStepContainer">
                <h1>PASO 4. APOYOS GENERALES DE PARTICIPACIÓN PARA NIÑAS, NIÑOS Y
                    ADOLESCENTES</h1>
                <h2>Instrucciones para la persona que aplicará los instrumentos</h2>
                <p>
                    En el paso 4, usted encuentra el Anexo D que contiene la información sobre los apoyos
                    generales mínimos que se consideran para la atención a las barreras más amplias del contexto institucional a las que se enfrentan las Niñas, Niños y Adolescentes.
                </p>
                <p>
                    En un primer momento, usted lea la información que integra el Anexo D que abarca los
                    siguientes apoyos generales:
                </p>
                <ul>
                    <li>Infraestructura</li>
                    <li>Comunicación</li>
                    <li>Dinámica del procedimiento de la diligencia</li>
                </ul>
                <p>
                    De manera posterior, adjunte este documento al Anexo E, que usted llenará en el siguiente paso.
                </p>

                <p>
                    Por último, en el día de la diligencia, usted verifique que se cumplan todos los apoyos
                    que se señalan en el Anexo D para la participación de cada Niña, Niño o Adolescente.
                </p>

            </div>
        </>
    );
}
