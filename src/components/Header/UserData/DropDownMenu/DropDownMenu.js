import React from 'react';
import DropDownMenuList from './DropDownMenuList';

const userMenuSettings = [
  { label: 'Account', link: '#account' },
  { label: 'Order History', link: '#order' },
  { label: 'Meal Planer', link: '#meal' },
];
const DropDownMenu = () => (
  <div>
    <DropDownMenuList items={userMenuSettings} />
    <button type="button">Log out</button>
  </div>
);

export default DropDownMenu;
