import React from "react";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { name, picture, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
    </div>
  );
};

export default TShirt;
