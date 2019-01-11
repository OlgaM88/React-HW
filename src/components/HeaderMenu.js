import React from "react";

const HeaderMenu = ({ links }) => (
  <ul className="menu__list">
    {links.map(({ label, link }) => (
      <li className="menu__list-item" key={label}>
        <a className="menu__link" href={link}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);
export default HeaderMenu;
