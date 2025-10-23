import React from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget";
import { useProducts } from "../../context/ProductsContext";
import "./Navbar.css";

function NavBar() {
  const { products, loading } = useProducts();

  if (loading) return null;

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MiTienda
      </Link>

      <div className="nav-categories">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Todos
        </NavLink>

        {categories.map((cat) => (
          <NavLink
            key={cat}
            to={`/category/${cat}`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {cat}
          </NavLink>
        ))}
      </div>

      <div className="cart-link">
        <Link to="#">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
