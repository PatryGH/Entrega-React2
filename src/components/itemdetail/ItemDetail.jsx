import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const add = () => setQty((q) => q + 1);
  const sub = () => setQty((q) => Math.max(1, q - 1));

  const handleAddToCart = () => {
    // Creamos un nuevo objeto con la cantidad seleccionada
    const productWithQty = { ...product, cantidad: qty };
    addToCart(productWithQty);
    alert(`
Agregaste ${qty} unidades de ${product.title} al carrito 🛒`);
  };

  return (
    <div className="item-detail">
      <img src={product.pictureUrl} alt={product.title} />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>

        <div className="counter">
          <button onClick={sub}>-</button>
          <span>{qty}</span>
          <button onClick={add}>+</button>
        </div>

        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemDetail;
