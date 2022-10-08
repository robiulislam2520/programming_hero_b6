import React from "react";

const Cart = ({ cart, handleRemove }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <hr />
      <br />
      <h4>Orders Quantity : {cart.length}</h4>
      <br />
      <div>
        <span>Items Added</span>
        {cart.map((item, index) => (
          <div className="item" key={item._id}>
            <p>
              {index + 1}. {item.name}
            </p>
            <button onClick={() => handleRemove(item._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
