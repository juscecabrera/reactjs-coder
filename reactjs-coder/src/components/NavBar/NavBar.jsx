import "../../main.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <div className="navbar-wrapper">
            <ul>
                <a><li>Inicio</li></a>
                <a><li>Productos</li></a>
                <a><li>Contacto</li></a>
            </ul>
            <CartWidget />
        </div>
    )
};

export default NavBar;