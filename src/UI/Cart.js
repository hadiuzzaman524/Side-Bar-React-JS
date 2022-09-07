import React from "react";
import Model from "./Model";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "suchi", amount: 32.44 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Model closeCart={props.closeCart}>
      {cartItems}
      <div>
        <span>Total amount</span>
        <span>45.43</span>
      </div>
      <div>
        <button onClick={props.closeCart}>Close</button>
        <button>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
