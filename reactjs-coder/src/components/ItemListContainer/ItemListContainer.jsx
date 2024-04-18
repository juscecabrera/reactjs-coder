import "../../main.css";
import { useState } from "react";

function ItemListContainer(props) {

    const [cantItems, setCantItems] = useState(0)

    const handleAdd = () => {
        setCantItems(cantItems + 1)
    }

    const handleSub = () => {
        if (cantItems > 0) setCantItems(cantItems - 1)
        else setCantItems (cantItems + 0)
    }

    let showCart = true;

    return(
        <div className={showCart ? "itemlistcontainer-wrapper" : "itemlistcontainer-wrapper hidden"}>
            <h1 className="itemlistcontainer-h1">{props.greeting}</h1>
            <div className="itemlistcontainer-counter-wrapper">
            <p className="itemlistcontainer-product">{props.products}</p>
                <button onClick={handleSub}>-</button>
                <span>{cantItems}</span>
                <button onClick={handleAdd}>+</button>
            </div>
        </div>
    )
};

export default ItemListContainer;