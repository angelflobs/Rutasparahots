import "../Styles/Modalcheck.css";
import { Link } from "react-router-dom";
import iconoB from "../img/check.png";
export function Checkconfirmation() {
  return (
    <div className="Principal">
      {/* Estrutura del boton */}
      <div className="boton-check">
        <label for="New-botn">Boton Confirmation</label>
      </div>
      <input type="checkbox" id="New-botn" />

      {/* Codigo de modal */}
      <div className="container-mod">
        <div class="content-mo">
          <div className="Modal-negro">
            <img src={iconoB} alt="Icono check" className="icon-check" />
            <h1>Tú reservación esta lista </h1>
            <div className="divisor"></div>
            <Link className="Link-Reserv"> Ver reservaciones</Link>
          </div>
        </div>
        <label for="New-botn" class="close-mod"></label>
      </div>
    </div>
  );
}
