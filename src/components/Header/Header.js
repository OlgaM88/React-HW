import React from 'react';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import UserMenu from './UserData/UserMenu';
import DropDownMenu from './UserData/DropDownMenu/DropDownMenu';
import Authentication from './Authentication/Authentication';

const Header = ({ children }) => (
  <header className="Header">
    <Logo />
    <HeaderMenu />
    <UserMenu />
    <DropDownMenu />
    <Authentication />
  </header>
);
export default Header;
