export const products = [
  {
    id: "1",
    title: "Remera Negra",
    price: 2500,
    category: "remeras",
    pictureUrl:
      "https://acdn-us.mitiendanube.com/stores/002/215/740/products/mockup-basica-negra-b989fa8f1daf238e2f17123227639037-1024-1024.jpg",
    description: "Remera de algodón, fit regular.",
  },
  {
    id: "2",
    title: "Zapatillas Runner",
    price: 12000,
    category: "zapatillas",
    pictureUrl:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6515b9e5/products/NIDR2695-001/NIDR2695-001-2.JPG",
    description: "Zapatillas cómodas para correr.",
  },
  {
    id: "3",
    title: "Gorra Cool",
    price: 3500,
    category: "gorras",
    pictureUrl:
      "https://www.newera.com.ar/cdn/shop/files/11591122_59FIFTY_MELTON_NEYYAN_SCA_3QL.jpg?v=1746047082",
    description: "Gorra con visera plana.",
  },
  {
    id: "4",
    title: "Remera Blanca",
    price: 2600,
    category: "remeras",
    pictureUrl:
      "https://acdn-us.mitiendanube.com/stores/002/215/740/products/mockup-blanca-basica-bf88224952dc09713317123240326199-1024-1024.jpg",
    description: "Algodón premium.",
  },
  {
    id: "5",
    title: "Zapatillas Street",
    price: 15000,
    category: "zapatillas",
    pictureUrl:
      "https://do2padres.com/cdn/shop/files/DSC04412-Photoroom.webp?v=1746535291",
    description: "Urbanas, look moderno.",
  },
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}

export function getProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p = products.find((prod) => prod.id === id);
      if (p) resolve(p);
      else reject("Producto no encontrado");
    }, 500);
  });
}
