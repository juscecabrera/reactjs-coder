import "../../main.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../../utils/MockData.js";
import { ItemList } from "../ItemList/ItemList.jsx";


function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const { catId } = useParams();

    useEffect(() => {
        setLoading(true);

        if (catId) {
            getProductsByCategory(catId).then((res) => {
                setProducts(res);
                setLoading(false);
            })
        } else {
            getProducts()
            .then((res) => {
                setProducts(res);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }, [catId])

    // const [cantItems, setCantItems] = useState(0)

    // const handleAdd = () => {
    //     setCantItems(cantItems + 1)
    // }

    // const handleSub = () => {
    //     if (cantItems > 0) setCantItems(cantItems - 1)
    //     else setCantItems (cantItems + 0)
    // }

    let showCart = true;

    return(
        <main>
        {/* <div className={showCart ? "itemlistcontainer-wrapper" : "itemlistcontainer-wrapper hidden"}>
            <h1 className="itemlistcontainer-h1">{props.greeting}</h1>
            <div className="itemlistcontainer-counter-wrapper">
            <p className="itemlistcontainer-product">{props.products}</p>
                <button onClick={handleSub}>-</button>
                <span>{cantItems}</span>
                <button onClick={handleAdd}>+</button>
            </div>
        </div> */}

        <div>
          <ItemList productsList={products}/>

        </div>
        </main>
    )
};

export default ItemListContainer;