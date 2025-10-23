import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemlist/ItemList";
import { useProducts } from "../../context/ProductsContext";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { categoryId } = useParams();
  const { products, loading } = useProducts();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!loading) {
      if (categoryId) {
        setItems(products.filter((p) => p.category === categoryId));
      } else {
        setItems(products);
      }
    }
  }, [categoryId, products, loading]);

  if (loading) return <p>Cargando productos...</p>;
  if (items.length === 0) return <p>No hay productos en esta categoría.</p>;

  return <ItemList products={items} />;
}

export default ItemListContainer;
