import React from "react";

const DropDownMenuList = ({ items }) => (
  <ul className="dd-menu__list">
    {items.map(({ label, link }) => (
      <li className="dd-menu__list-item" key={label}>
        <a className="dd-menu__link" href={link}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);
export default DropDownMenuList;
