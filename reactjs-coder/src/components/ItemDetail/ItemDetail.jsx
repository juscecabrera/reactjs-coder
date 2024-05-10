import React from 'react';
import "../../main.css";

export const ItemDetail = ({id, name, description, price, stock, category}) => {    
    return (
      <>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: {price}</p>
      <p>Stock: {stock}</p>
      <p>Categoria: {category}</p>
      </>
    )
};