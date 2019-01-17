import React from "react";

const HeaderMenu = ({ links }) => (
  <ul className="header-menu__list">
    {links.map(({ label, link }) => (
      <li className="header-menu__list_item " key={label}>
        <a className="menu__link" href={link}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);
export default HeaderMenu;
