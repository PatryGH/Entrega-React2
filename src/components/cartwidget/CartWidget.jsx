import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="cart-widget">
      <button onClick={() => setOpen(true)} className="cart-btn">
        🛒 <span>{totalItems}</span>
      </button>

      {open && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✖
            </button>

            <h2>Tu carrito</h2>

            {cart.length === 0 ? (
              <p className="empty">
                Tu carrito está vacío
                <br />
                ¡Empezá a comprar!
              </p>
            ) : (
              <>
                <ul className="cart-list">
                  {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                      <img src={item.pictureUrl} alt={item.title} />
                      <div className="info">
                        <p>{item.title}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.price * item.cantidad}</p>
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <button className="clear-btn" onClick={clearCart}>
                  Vaciar carrito
                </button>
              </>
            )}
          </div>
          <div className="overlay" onClick={() => setOpen(false)}></div>
        </div>
      )}
    </div>
  );
}

export default CartWidget;
