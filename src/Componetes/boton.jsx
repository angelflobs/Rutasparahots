import { Link } from "react-router-dom";
export function Newboton () {
    return (
        <div>
            <Link to={"/Sorpresa"}>
                <button>Hello word</button>
            </Link>
        </div>
    );
}