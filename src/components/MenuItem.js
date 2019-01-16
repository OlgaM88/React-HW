import React from "react";
import AddComment from "./AddComment";

const MenuItem = ({ id, imageUrl, name, price, width = 200, height = 200 }) => (
  <div className="menu__item">
    <img
      className="image"
      src={imageUrl}
      alt={name}
      width={width}
      height={height}
    />
    <h4 className="name">{name}</h4>
    <p className="text">Price: {price}</p>
    <button className="btn" type="button">
      Add to cart
    </button>
  </div>
);
export default MenuItem;
