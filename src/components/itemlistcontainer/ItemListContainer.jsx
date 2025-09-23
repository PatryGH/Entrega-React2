// src/components/itemlistcontainer/ItemListContainer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemlist/ItemList";
import { getProducts } from "../../assets/products";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((all) => {
        if (categoryId) {
          setItems(all.filter((p) => p.category === categoryId));
        } else {
          setItems(all);
        }
      })
      .finally(() => setLoading(false));
  }, [categoryId]); // important: categoryId en dependencias

  if (loading) return <p>Cargando productos...</p>;
  if (items.length === 0) return <p>No hay productos en esta categoría.</p>;

  return <ItemList products={items} />;
}

export default ItemListContainer;
