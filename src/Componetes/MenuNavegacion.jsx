import { Link } from "react-router-dom";

export function MenuNav() {
    return (
        <div>
            <div>
                <h1>
                    Este es un menu de navegacion
                </h1>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Escanear</Link>
                        </li>
                        <li>
                            <Link to={"/Reservaciones"}>Reservaciones</Link>
                        </li>
                        <li>
                            <Link to={"/NuevaReservacion"}>Nueva Reservación</Link>
                        </li>
                        <li>
                            <Link to={"/Micuenta"}>Mi cuenta</Link>
                        </li>
                        <li>
                            <Link to={"/Hello"}>wELCOME</Link>
                        </li>
                        <li>
                            <Link to={"/ModalCaled"}>Modal de calendario</Link>
                        </li>
                        <li>
                            <Link to={"/Modaldelet"}>Modal de Eliminar reservación</Link>
                        </li>
                        <li>
                            <Link to={"/Modalcheck"}>Modal de Reservación aprobada.</Link>
                        </li>

                    </ul>
                </nav>
            </div>

        </div>
    );
}