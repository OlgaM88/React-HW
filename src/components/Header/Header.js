import React from 'react';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import UserMenu from './UserData/UserMenu';
import DropDownMenu from './UserData/DropDownMenu/DropDownMenu';
import Authentication from './Authentication/Authentication';

import logo from '../../burger.svg';

const links = [
  { label: 'Menu', link: '#menu' },
  { label: 'About', link: '#about' },
  { label: 'Home', link: '#home' },
  { label: 'Contact', link: '#contact' },
  { label: 'Delivery', link: '#delivery' },
];

const Header = ({ children }) => (
  <header className="Header">
    <Logo imageUrl={logo} />
    <HeaderMenu links={links} />
    <UserMenu />
    <DropDownMenu />
    <Authentication />
  </header>
);
export default Header;
