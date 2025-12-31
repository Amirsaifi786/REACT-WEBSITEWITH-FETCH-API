import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import './CartPage.css';

const CartPage = ({ cart = [], removeFromCart }) => {
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="cart-page empty">
        <h2>Your Cart is Empty</h2>
        <Link to="/products" className="btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      <div className="cart-table">
        {cart.map(item => (
          <div className="cart-row" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />

            <div className="cart-info">
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
