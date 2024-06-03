import "../../main.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar-wrapper">
            <ul>
                <Link to="/"><li>Inicio</li></Link>
                <Link to="/products"><li>Productos</li></Link>
                <Link to="/category/perros"><li>Perros</li></Link>
                <Link to="/category/gatos"><li>Gatos</li></Link>
                <Link to="/cart">{<CartWidget />}</Link>
            </ul>
            
        </div>
    )
};

export default NavBar;