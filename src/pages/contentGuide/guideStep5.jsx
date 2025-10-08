import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";

export default function GuideStep4({ withNavbar = true }) {
    return (
        <>
            {withNavbar && <Navbar title="Paso 3" />}
            <div className="guideStepContainer">
                <h1>PASO 5</h1>
                <h2>Instrucciones para la persona que aplicará los instrumentos</h2>

                <p>
                    En este último paso de la Guía, usted genera el Perfil de apoyos centrados en la Niña,
                    Niño o Adolescente que le hará llegar a la autoridad correspondiente con la finalidad de
                    realizar las acciones pertinentes que permitan una participación sensible y adaptada de
                    las Niñas, Niños y Adolescentes a partir de sus necesidades y características personales.
                </p>

                <p>
                    Para realizar el Perfil de apoyos centrados en la Niña, Niño o Adolescente, utilice el{" "}
                    <Link to="/contentGuide/anexoE">Anexo E</Link>, en donde integre la información y señale
                    los apoyos específicos que requieran las Niñas, Niños y Adolescentes para su participación
                    que fueron detectadas en el Paso 1, 2 y 3 de esta Guía.
                </p>

                <p>
                    De igual manera, en la parte posterior del{" "}
                    <Link to="/contentGuide/anexoE">Anexo E</Link>, describa la sugerencia de implementación
                    de los apoyos específicos que fueron identificados en los pasos previos.
                </p>
            </div>
        </>
    );
}
