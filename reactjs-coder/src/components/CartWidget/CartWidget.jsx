import "../../main.css";
import CartSVG from "../../assets/cart.svg";
import { useCartContext } from "../../context/CartContext";

function CartWidget() {
    const { totalQuantity } = useCartContext();

    return(
        <>
            <img src={CartSVG} className="cartwidget-svg"></img>
            <span>{totalQuantity}</span>
        </>
    )
};

export default CartWidget;

