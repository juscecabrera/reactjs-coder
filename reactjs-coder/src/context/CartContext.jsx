import { useState } from "react";
import { createContext, useContext } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
  return useContext(cartContext)
}

const CartContextProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, quantity) => {
    setTotalQuantity(totalQuantity + quantity);
    setTotalPrice(totalPrice + (item.price * quantity));
    let newCart = [];

    if (isInCart(item.id)) {
      newCart = cart.map((elem) => {
        if (elem.id === item.id) {
          return { ...elem, quantity: elem.quantity + quantity };
        } else {
          return elem;
        }
      });
      setCart(newCart);
    } else {
      newCart = [...cart, { ...item, quantity }];
      setCart(newCart);
    }
  };

  const isInCart = (id) => {
    return cart.find((elem) => elem.id === id);
  };

  const removeItem = (id, price, quantity) => {
    setTotalPrice(totalPrice - (price * quantity));
    setTotalQuantity(totalQuantity - quantity);

    const newCart = cart.filter((elem) => elem.id !== id);

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };

  const contextValue = {
    totalQuantity,
    totalPrice,
    cart,
    addToCart,
    removeItem,
    clearCart,
  };


  
  return <Provider value={contextValue}>{children}</Provider>
  
};

export default CartContextProvider;