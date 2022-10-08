import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <hr />
      <br />
      <h4>Orders Quantity : {cart.length}</h4>
    </div>
  );
};

export default Cart;
