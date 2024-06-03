import "../../main.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../../utils/MockData.js";
import { ItemList } from "../ItemList/ItemList.jsx";
import { db } from "../../firebase/dbConnection.js";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";


function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const { catId } = useParams();

    useEffect(() => {
        setLoading(true);

        const productsCollection = collection(db, "productos")

        if (catId) {
            
            const cons = query(productsCollection, where("category", "array-contains", catId))
            
            getDocs(cons)
            .then(({ docs }) => {
                const prodFromDocs = docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(prodFromDocs);
                setProducts(prodFromDocs)
                setLoading(false);
            }).catch((err) => {
                console.error(err.message)
            })
            // getProductsByCategory(catId).then((res) => {
            //     setProducts(res);
            //     setLoading(false);
            // })
        } else {
            getDocs(productsCollection)
                .then(({ docs }) => {
                const prodFromDocs = docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(prodFromDocs);
                setProducts(prodFromDocs)
                setLoading(false);
            }).catch((err) => {
                console.error(err.message)
            })
            

            // getProducts()
            // .then((res) => {
            //     setProducts(res);
            //     setLoading(false);
            // })
            // .catch((err) => {
            //     console.log(err)
            // })
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