import "../../main.css";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getProductById } from "../../utils/MockData.js"

export const ItemDetailContainer = () => {    
    const { prodId } = useParams();
    const [product, setProduct] = useState([])

  useEffect(() => {
    getProductById(prodId)
      .then((res) => {
        setProduct(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [prodId])

    return (
      <>
      <ItemDetail {...product} />
      </>
    )
};