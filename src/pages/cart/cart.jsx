import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Sepetinizdeki Ürünler</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map(product => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Toplam: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Alışverişe Devam Et</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Ödeme Yap
          </button>
        </div>
      ) : (
        <h1>Sepetiniz Boş</h1>
      )}
    </div>
  );
};
