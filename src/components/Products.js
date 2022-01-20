import React from "react";

const Products = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="menuItemCart">
      <img
        src={`https://burgerback.herokuapp.com/${product.img}`}
        alt={product.name}
      />
      <div>
        {product.name} <br />${product.price}
      </div>
      <button onClick={() => onAdd(product)}>add</button>
    </div>
  );
};

export default Products;
