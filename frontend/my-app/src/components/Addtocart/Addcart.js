import React from "react";
import "./Addcart.css";

export default function Addcart({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="cartclear">
          <h5>Your Cart</h5>
          <button className="clear"> Clear</button>
        </div>
        <div>
          <h3>Item1</h3>
          <h3>Item2</h3>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}
