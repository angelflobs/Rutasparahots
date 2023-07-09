import "../Styles/Nuevomodal.css";
export function Mcalend() {
  return (
    <div>
      {/* Estructura para el boton que abre el modal */}
      <div className="boton">
        <label for="Nuevo-btn">Modal de fecha</label>
      </div>
      <input type="checkbox" id="Nuevo-btn" />

      {/* Estructura para el modal */}
      <div className="container-mod">
        <div className="content-mod">
          <div className="content-fecha">
            <h1 className="month">Jun</h1>
            <h2 className="Number-day">28</h2>
            <p className="day">Lunes</p>
            <p className="Reservation">Reservaciones para hoy</p>
            <div className="Content-reserv">
            <p className="username">Julio Parra</p>
            <p className="time">Hora: 8:00 a.m</p>
          </div>
          </div>
        </div>
        <label for="Nuevo-btn" class="cerrar-modal"></label>
      </div>
    </div>
  );
}
