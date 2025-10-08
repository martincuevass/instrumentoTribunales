import React from "react";
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";

import presentacionA from "../../assets/apendice2presentacionA.png";
import objetivoA from "../../assets/apendice2objetivoA.png";
import reglasA from "../../assets/apendice2reglasA.png";
import diligenciaA from "../../assets/apendice2diligenciaA.png";
import dudasA from "../../assets/apendice2dudasA.png";
import despedidaA from "../../assets/apendice2despedidaA.png";

import presentacionB from "../../assets/apendice2presentacionB.png";
import objetivoB from "../../assets/apendice2objetivoB.png";
import caracteristicasB from "../../assets/apendice2caracteristicasB.png";
import dudasB from "../../assets/apendice2dudasB.png";
import medirB from "../../assets/apendice2medirB.png";
import bataB from "../../assets/apendice2bataB.png";
import acostarseB from "../../assets/apendice2acostarseB.png";
import sabanaB from "../../assets/apendice2sabanaB.png";
import revisarB from "../../assets/apendice2revisionB.png";
import expresarB from "../../assets/apendice2expresarB.png";
import vestirseB from "../../assets/apendice2vestirseB.png";
import despedidaB from "../../assets/apendice2despedidaB.png";

export default function Apendice2() {
  return (
    <>
      <Navbar title="Apendice 2" />
      <div className="guideStepContainer">
        <h1>APÉNDICE 2. MATERIAL DE APOYO VISUAL PARA BRINDAR INFORMACIÓN</h1>
        <p>
          A. Diligencia de entrevista (imágenes informativas sobre la dinámica del
          procedimiento de la diligencia)
        </p>

        <p>1. Presentación</p>
        <img src={presentacionA} alt="Presentación de la diligencia de entrevista" />
        <p>2. Objetivo de diligencia</p>
        <img src={objetivoA} alt="Objetivo de la diligencia de entrevista" />
        <p>3. Reglas de diligencia</p>
        <img src={reglasA} alt="Reglas de la diligencia de entrevista" />
        <p>4. Diligencia</p>
        <img src={diligenciaA} alt="Desarrollo de la diligencia de entrevista" />
        <p>5. Resolver dudas</p>
        <img src={dudasA} alt="Resolución de dudas en la diligencia de entrevista" />
        <p>6. Despedida</p>
        <img src={despedidaA} alt="Despedida en la diligencia de entrevista" />

        <p>
          B. Diligencia médica forense (imágenes informativas sobre la dinámica del
          procedimiento de la diligencia)
        </p>
        <p>1. Presentación</p>
        <img src={presentacionB} alt="Presentación de la diligencia médica forense" />
        <p>2. Objetivo de diligencia</p>
        <img src={objetivoB} alt="Objetivo de la diligencia médica forense" />
        <p>3. Características del consultorio</p>
        <img src={caracteristicasB} alt="Características del consultorio médico" />
        <p>4. Resolver dudas</p>
        <img src={dudasB} alt="Resolución de dudas en la diligencia médica" />
        <p>5. Medir y pesar</p>
        <img src={medirB} alt="Medición de peso y talla en la diligencia médica" />
        <p>6. Usar bata</p>
        <img src={bataB} alt="Uso de bata médica durante la diligencia" />
        <p>7. Acostarse en la camilla</p>
        <img src={acostarseB} alt="Acostarse en la camilla de revisión médica" />
        <p>8. Usar sábana</p>
        <img src={sabanaB} alt="Uso de sábana para cubrirse en la revisión médica" />
        <p>9. Revisión</p>
        <img src={revisarB} alt="Revisión médica durante la diligencia forense" />
        <p>10. Expresar incomodidad o dolor</p>
        <img src={expresarB} alt="Expresar incomodidad o dolor durante la revisión médica" />
        <p>11. Ponerse la ropa</p>
        <img src={vestirseB} alt="Ponerse la ropa después de la revisión médica" />
        <p>12. Despedida</p>
        <img src={despedidaB} alt="Despedida al finalizar la diligencia médica" />
      </div>
    </>
  );
}
