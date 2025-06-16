// src/components/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import style from "./CartPage.module.css"; // Assuming you have a CSS module for styling

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
    <footer>
      <p>&copy; 2025 Piece of Cake Bakery. All rights reserved.</p>
    </footer>
  );
};

export default CartPage;
