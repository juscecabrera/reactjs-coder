import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemCount = ({ stock, initial, handleAddToCart }) => {
  const navigate = useNavigate();
  const [quantItems, setQuantItems] = useState(0);
  const [prodAgregado, setProdAgregado] = useState(false);

  const handleAdd = () => {
    setQuantItems(quantItems + 1);
  }

  const handleSubs = () => {
    if (quantItems > 0) {
      setQuantItems(quantItems - 1);
    }
    //QA
  }

  const handleCompletePurchase = () => {
    setProdAgregado(false);
    navigate("/cart");
  }

  const handleAddToCart2 = () => {
    setProdAgregado(true);
    handleAddToCart(quantItems)
  }

  return (
    <>
      <div>
        <button onClick={handleSubs}> - </button>
        <span> {quantItems} </span>
        <button onClick={handleAdd}> + </button>
      </div>

      {prodAgregado ? (
        <button onClick={handleCompletePurchase}> Terminar Compra </button>
      ) : (
        <button onClick={handleAddToCart2}>Agregar al carrito</button>
      )}
    </>
  )
}
