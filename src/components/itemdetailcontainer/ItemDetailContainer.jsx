import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../assets/products";
import ItemDetail from "../itemdetail/ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((p) => setProduct(p))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]); // importante: id en dependencias

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
