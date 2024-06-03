import React from 'react';
import "../../main.css";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = (item) => {    
  const {name, description, price, stock, category} = item

  const { addToCart } = useCartContext();

  const handleAddToCart = (quantity) => {
    addToCart(item, quantity)
  }  

    return (
      <>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: {price}</p>
      <p>Stock: {stock}</p>
      <p>Categoria: {category}</p>
      <ItemCount stock={stock} initial={1} handleAddToCart={handleAddToCart}></ItemCount>
      </>
    )
};

