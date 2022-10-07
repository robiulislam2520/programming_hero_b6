import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "./order.css";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleDelete = (id) => {
    const deletedCart = initialCart.filter(product => product.id !== id);
    setCart(deletedCart);
    removeFromDb(id)
  }
  // console.log(initialCart)
  return (
    <div className="container">
      <div className="orders-products">
        <div className="products">
          {cart.map((pd) => {
            return (
              <div key={pd.id}>
                <div className="flex">
                  <div>
                    <img src={pd.img} alt={pd.name} />
                  </div>
                  <div>
                    <h3>Qty: {pd.quantity}</h3>
                    <p>Price: ${pd.price * pd.quantity}</p>
                    <button onClick={() => handleDelete(pd.id)}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
