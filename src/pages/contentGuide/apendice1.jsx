import React from "react";
import Navbar from "../../components/navBar.jsx";
import "../../styles/guideFormat.css";
import casa from "../../assets/casa.png";
import escenario2 from "../../assets/apendice1escenario2.png"

export default function Apendice1() {
  return (
    <>
      <Navbar title="Apendice 1" />
      <div className="guideStepContainer">
        <h1>APÉNDICE 1. IMÁGENES PARA EVALUAR EL USO DE MATERIALES DE
          APOYO VISUAL PARA BRINDAR INFORMACIÓN</h1>

        <p> Escenario 1 </p>
        <img src={casa} alt="Casa" />
        <p>Escenario 2</p>
        <img src={escenario2} alt="Escenario2" />
      </div>


    </>
  );
}
