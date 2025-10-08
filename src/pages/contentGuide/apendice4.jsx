import React from "react";
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";

import feliz1 from "../../assets/apendice4feliz1.png"
import triste1 from "../../assets/apendice4triste1.png"
import asustado1 from "../../assets/apendice4asustado1.png"
import molesto1 from "../../assets/apendice4molesto1.png"

import feliz2 from "../../assets/apendice4feliz2.png"
import triste2 from "../../assets/apendice4triste2.png"
import asustado2 from "../../assets/apendice4asustado2.png"
import molesto2 from "../../assets/apendice4molesto2.png"


export default function Apendice4() {
  return (
    <>
      <Navbar title="Apendice 4" />
      <div className="guideStepContainer">
        <h1>APÉNDICE 4. IMÁGENES PARA EVALUAR EL USO DE MATERIALES DE
APOYO PARA LA EXPRESIÓN EMOCIONAL</h1>
<p>Actividad 1</p>
<img src={feliz1} alt="" />
<img src={triste1} alt="" />
<img src={asustado1} alt="" />
<img src={molesto1} alt="" />

<p>Actividad 2</p>
<img src={feliz2} alt="" />
<img src={triste2} alt="" />
<img src={asustado2} alt="" />
<img src={molesto2} alt="" />
      </div>
    </>
  );
}
