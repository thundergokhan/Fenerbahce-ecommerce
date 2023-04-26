import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" className="link">
          Anasayfa
        </Link>
        <Link to="/contact" className="link">
          İletişim
        </Link>
        <Link to="/cart" className="link">
          <ShoppingCart size={32} color="#edfd0a" />
        </Link>
      </div>
    </div>
  );
};
