import "./Product.css";

export default function Product({ product }) {
  const { name, img, price, ratings, seller } = product;

  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product_body">
        <h6 title={name}>
          {name?.length > 20 ? name.slice(0, 20) + "..." : name}
        </h6>
        <h3>Price:$ {price}</h3>
      </div>
      <div className="bottom_text">
        <p>Manufactured by: {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button className="btn">Add To Cart</button>
    </div>
  );
}
