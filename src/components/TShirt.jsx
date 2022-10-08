import React from "react";

const TShirt = ({ tshirt }) => {
  const { name, picture, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <button>Buy This</button>
    </div>
  );
};

export default TShirt;
