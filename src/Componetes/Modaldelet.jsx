import "../Styles/Modaleliminar.css";
import iconoA from "../img/signaladvertensia.png";

export function Btndelet() {
  return (
    <div>
      {/* Estrutura del boton */}
      <div className="boton-delet">
        <label for="New-btn">Boton delet</label>
      </div>
      <input type="checkbox" id="New-btn" />

      {/* Codigo de modal */}
      <div className="container-mod">
        <div class="content-m">
          <div className="Modal-black">
            <img src={iconoA} alt="Icono de advertensia" className="icon-img" />
            <h1>¿Estas seguro que quieres eliminar la reservación?</h1>
            <div className="divisor"></div>
            <button className="btdel">Si, estoy de acuerdo</button>
          </div>
        </div>
        <label for="New-btn" class="close-modal"></label>
      </div>
    </div>
  );
}
