import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const PRODUCTS_COL = "products";
const ORDERS_COL = "orders";

export async function fetchProducts() {
  const colRef = collection(db, PRODUCTS_COL);
  const snaps = await getDocs(colRef);
  return snaps.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
}

export async function fetchProductById(id) {
  const docRef = doc(db, PRODUCTS_COL, id);
  const snap = await getDoc(docRef);
  if (!snap.exists()) throw new Error("Producto no encontrado");
  return { id: snap.id, ...snap.data() };
}

export async function createOrder(orderData) {
  const colRef = collection(db, ORDERS_COL);
  const orderWithTimestamp = {
    ...orderData,
    createdAt: Timestamp.fromDate(new Date()),
  };
  const docRef = await addDoc(colRef, orderWithTimestamp);
  return docRef.id;
}
