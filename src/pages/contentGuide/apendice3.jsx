import React from "react";
import Navbar from "../../components/navBar";
import "../../styles/guideFormat.css";

import pintura from "../../assets/apendice3pintura.png"
import reunion from "../../assets/apendice3reunion.png"
import musica from "../../assets/apendice3musica.png"
import juego from "../../assets/apendice3juego.png"
import clase from "../../assets/apendice3clase.png"
import comida from "../../assets/apendice3comida.png"
import ducha from "../../assets/apendice3ducha.png"
import liquido from "../../assets/apendice3liquido.png"
import baño from "../../assets/apendice3baño.png"
import hablar from "../../assets/apendice3hablar.png"


export default function Apendice3() {
  return (
    <>
      <Navbar title="Apendice 3" />
      <div className="guideStepContainer">
        <h1>APÉNDICE 3. IMÁGENES PARA EVALUAR EL USO DE PICTOGRAMAS</h1>
        <p>Actividad 2</p>
<img src={pintura} alt="pintura" />
<img src={reunion} alt="pintura" />
<img src={musica} alt="pintura" />
<img src={juego} alt="pintura" />
<img src={clase} alt="pintura" />
<img src={comida} alt="pintura" />
<img src={ducha} alt="pintura" />
<img src={liquido} alt="pintura" />
<img src={baño} alt="pintura" />
<img src={hablar} alt="pintura" />
      </div>
    </>
  );
}
