import { deleteShoppingCart } from "../../utils/fakedb";
import "./Cart.css";

export default function Cart() {
  const shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));

  return (
    <div className="cart">
      <div className="cart_details">
        <ul>
          <li>
            Selected Items: {shoppingCart?.items ? shoppingCart?.items : 0}
          </li>
          <li>
            Total Price: $
            {shoppingCart?.totalPrice ? shoppingCart?.totalPrice : 0}
          </li>
          <li>Total Shipping Charge: $5</li>
          <li>Tax: $114</li>
        </ul>
        <hr />
        <h3>
          Grand Total: $
          {shoppingCart?.grandTotal ? shoppingCart?.grandTotal : 0}
        </h3>
      </div>
      <button className="cart_btn" onClick={deleteShoppingCart}>
        Clear Cart
      </button>
      <button className="cart_btn">Review Order</button>
    </div>
  );
}
