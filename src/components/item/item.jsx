import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.pictureUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
