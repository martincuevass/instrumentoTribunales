// src/views/contentGuide/GuideStep1.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";

export default function GuideStep1({ withNavbar = true }) {
    return (
        <>
            {withNavbar && <Navbar title="Paso 1" />}

            <div className="guideStepContainer">
                <h1>PASO 1. REVISIÓN DEL EXPEDIENTE</h1>
                <h2>Instrucciones para la persona que aplicará los instrumentos</h2>
                <p>
                    En el presente apartado, verifique la información del expediente o carpeta de investigación de la Niña, Niño o Adolescente relacionada con sus datos de identificación y elementos relevantes sobre la condición de salud, discapacidad y manera de comunicarse.
                </p>
                <p>
                    En este paso, utilice el <Link to={"/contentGuide/anexoA"}>Anexo A</Link> para registrar la información que se le solicite del expediente o carpeta de investigación.
                </p>
                <p>
                    Si en el expediente o carpeta de investigación, no está presente la información solicitada en el <Link to={"/contentGuide/anexoA"}>Anexo A</Link>, proceda a escribir <strong>“ND”</strong> en el apartado correspondiente, lo cual significará que la información no se encuentra disponible.
                </p>
                <p>
                    En caso de que se reporte una condición de salud relevante para la diligencia, discapacidad o que se requiera un intérprete, usted procede a informarlo en el <Link to={"/contentGuide/anexoE"}>Anexo E</Link> y describe el tipo de apoyo detectado.
                </p>
                <p>
                    De igual manera, en caso de llenar el <Link to={"/contentGuide/anexoE"}>Anexo E</Link> durante la revisión del expediente, considere esta información para entregar los apoyos necesarios al interactuar con la Niña, Niño o Adolescente en el <Link to={"/contentGuide/GuideStep3"}>Paso 3</Link> de esta Guía.
                </p>
                <p>
                    Ante la detección de una situación de ayuda inmediata en el <Link to={"/contentGuide/anexoA"}>Anexo A</Link>, realice la canalización pertinente, priorizando la atención de la Niña, Niño o Adolescente.
                </p>
            </div>
        </>
    );
}
