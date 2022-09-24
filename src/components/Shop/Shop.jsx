import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section className="shop_container">
      <section className="products_container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
      <section className="cart_container">
        <h4>Order Summary</h4>
      </section>
    </section>
  );
}
