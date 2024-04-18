import "../../main.css";
import CartSVG from "../../assets/cart.svg";
import { useState } from "react";

function CartWidget() {

    const [showCart, setShowCart] = useState(false);

    const functionShowCart = () => {
        setShowCart(!showCart)
    }

    return(
        <>
        <a onClick={functionShowCart}><img src={CartSVG} className="cartwidget-svg"></img></a>
        </>
    )
};

export default CartWidget;

