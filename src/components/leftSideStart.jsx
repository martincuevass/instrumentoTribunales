import "../styles/leftSideStart.css";
import imageLogos from "../assets/imageLogos.png";
import backgroundLogin from "../assets/backgroundLogin.png";

export default function LeftSideStart() {
  return (
    <div
      className="left-side"
      style={{
        backgroundImage: `url(${backgroundLogin})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>INSTRUMENTO</h1>
      <p>
        Guía de garantía de derechos en justicia adaptada a niñas, niños y adolescentes
      </p>
      <img src={imageLogos} alt="Logos de todas las organizaciones" />
    </div>
  );
}
