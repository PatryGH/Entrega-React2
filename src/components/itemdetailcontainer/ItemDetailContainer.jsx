import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemdetail/ItemDetail";
import { useProducts } from "../../context/ProductsContext";

function ItemDetailContainer() {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!loading) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct || null);
    }
  }, [id, products, loading]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado </p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
