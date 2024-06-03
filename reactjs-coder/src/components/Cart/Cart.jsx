import "../../main.css";
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
import { db } from "../../firebase/dbConnection";
import { addDoc, collection } from "firebase/firestore";

function Cart() {
  const { cart, totalPrice, removeItem, clearCart } = useCartContext();
  const [formData, setFormData] = useState({ name: "", telephone: "", email: "" });

  const handleRemoveItem = (id, price, quantity) => {
    removeItem(id, price, quantity);
  };


  const handleSaveCart = () => {

    const ordersCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: totalPrice,
    };
    addDoc(ordersCollection, newOrder)
      .then((doc) => {
        alert("Compra exitosa. N° orden: " + doc.id);
        // console.log(doc);
        clearCart();
        setFormData({ name: "", telephone: "", email: "" });
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, name, price, quantity }, index) => {
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                  <button onClick={() => handleRemoveItem(id, price, qty)}>
                    Remove Item
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>Total price</td>
            <td> $ {totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => {clearCart}}>Clear Cart</button>

      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ingrese nombre"
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="number"
        name="tel"
        id="tel"
        placeholder="Ingrese telefono"
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Ingrese email"
        onChange={(e) => handleOnChange(e)}
      />
      <button onClick={handleSaveCart}>Finalizar Compra</button>
    </>
  )
}

export default Cart