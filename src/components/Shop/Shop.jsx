import { useEffect, useState } from "react";
import { addToDbArray } from "../../utils/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err.message));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    addToDbArray([...cart, product].length, [...cart, product]);
  };
  return (
    <section className="shop_container">
      <section className="products_container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </section>
      <section className="cart_container">
        <h4>Order Summary</h4>
        <Cart cart={cart} />
      </section>
    </section>
  );
}
