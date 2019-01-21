import React from "react";
import MenuItem from "./MenuItem";
import AddComment from "./AddComment";

const MenuList = ({ products, message, onmessageChange }) => (
  <ul className="list__products">
    {products.map(product => (
      <li key={product.id} className="menu__list-item">
        <MenuItem
          imageUrl={product.image}
          name={product.name}
          price={product.price}
          value={message}
        />
        <AddComment onmessageChange={onmessageChange} ongra message={message} />
      </li>
    ))}
  </ul>
);
export default MenuList;
