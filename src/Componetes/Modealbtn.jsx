import "../Styles/Esilos.css"

export function Btnmodal() {
  return (
    <div>
      <div className="boton-modal">
        <label for="btn-modal">Abrir modal</label>
      </div>
      <input type="checkbox" id="btn-modal" />

      <div className="container-modal">
        <div className="content-modal">
          <h2>Prueba para el modal</h2>
          <p>
            Hola Diana fuie creado en React.js 
          </p>

          <div className="btn-cerrar">
            <label for="btn-modal">Cerrar</label>
          </div>
        </div>
        <label for="btn-modal" className="cerrar-modal"></label>
      </div>
    </div>
  );
}
