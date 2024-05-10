import "../../main.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar-wrapper">
            <ul>
                <Link to="/"><li>Inicio</li></Link>
                <Link to="/products"><li>Productos</li></Link>
                {/* <Link to="/category/"></Link> */}
                {/* Falta aca tener los datos correspondientes y con ellos podemos configurar las categorias */}
            </ul>
            <CartWidget />
        </div>
    )
};

export default NavBar;