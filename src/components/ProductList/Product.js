import React from 'react';

const Product = ({ imageUrl, name, alt, price }) => (
  <div className="product">
    <img className="image" src={imageUrl} alt={name} />
    <h2 className="name">{name}</h2>
    <p className="text">{price}</p>
    <button className="btn" type="button">
      Add to cart
    </button>
  </div>
);
export default Product;
