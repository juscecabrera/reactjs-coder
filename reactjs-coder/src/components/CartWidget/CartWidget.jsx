import "../../main.css";
import CartSVG from "../../assets/cart.svg";

function CartWidget() {
    return(
        <>
            <img src={CartSVG} className="cartwidget-svg"></img>
        </>
    )
};

export default CartWidget;

