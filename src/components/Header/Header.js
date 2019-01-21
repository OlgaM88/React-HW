import React from "react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import UserMenu from "./UserMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import Authentication from "./Authentication/Authentication";

import logo from "../../burger.svg";
import UserImage from "../../user-image.jpg";

let links = [
  { label: "Menu", link: "#menu" },
  { label: "About", link: "#about" },
  { label: "Home", link: "#home" },
  { label: "Contact", link: "#contact" },
  { label: "Delivery", link: "#delivery" }
];

const Header = ({ children }) => (
  <header className="Header">
    <Logo imageUrl={logo} />
    <HeaderMenu links={links} />
    <UserMenu imageUrl={UserImage} />
    <DropDownMenu />
    <Authentication />
  </header>
);
export default Header;
