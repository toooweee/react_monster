import React from "react";

const Product = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
};

export default Product;
