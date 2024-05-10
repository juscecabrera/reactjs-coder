import React from 'react';
import { Link } from "react-router-dom";
import "../../main.css";

export const Item = ({id,name,description}) => {  
  const handleOnClick = () => {
    console.log("click")
  }

  return (
    <>
    <h3>{name}</h3>
    <p>{description}</p>
    <Link to={`/products/${id}`} onClick={handleOnClick}>Ver detalles</Link>
    </>
  )
};