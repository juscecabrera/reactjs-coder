import "../../main.css";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { db } from "../../firebase/dbConnection.js";
import { collection, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {    
    const { prodId } = useParams();
    const [product, setProduct] = useState([])

  useEffect(() => {
    const productsCollection = collection(db, "productos");
    const refDoc = doc(productsCollection, prodId);

    getDoc(refDoc)
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data()});
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