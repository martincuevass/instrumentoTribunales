import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

export default function GuideStep5() {
    return (
        <>
            <Navbar title="Paso 5" />
            <div className="guideStepContainer">
                <h1>PASO 5</h1>
                <h2>Instrucciones para la persona que aplicará los instrumentos</h2>

                <p>En este último paso de la Guía, usted genera el Perfil de apoyos centrados en la Niña,
                    Niño o Adolescente que le hará llegar a la autoridad correspondiente con la finalidad de
                    realizar las acciones pertinentes que permitan una participación sensible y adaptada de
                    las Niñas, Niños y Adolescentes a partir de sus necesidades y características personales. </p>

                <p>Para realizar el Perfil de apoyos centros en la Niña, Niño o Adolescente, utilice el
                    Anexo E, en donde integre la información y señale los apoyos específicos que requieran
                    las Niñas, Niños y Adolescentes para su participación que fueron detectadas en el Paso 1,
                    2 y 3 de esta Guía.</p>

                <p>De igual manera, en la parte posterior del Anexo E, describa la sugerencia de implementación de los apoyos específicos que fueron identificados en los pasos previos. </p>

            </div>
        </>
    );
}
