import React, { Component } from "react";
import Header from "./Header";
import burger from "./burger.svg";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import HeaderMenu from "./HeaderMenu";
import DropDownMenu from "./DropDownMenu";
import Authentication from "./Authentication";

import orderHistory from "../JSON/order-history.json";

import OrderHistory from "./OrderHistory";

const INITIAL_STATE = {
  title: "Burger Food"
};

export default class App extends Component {
  state = { ...INITIAL_STATE };

  render() {
    const { title } = this.state;

    let links = [
      { label: "Menu", link: "#menu" },
      { label: "About", link: "#about" },
      { label: "Home", link: "#home" },
      { label: "Contact", link: "#contact" },
      { label: "Delivery", link: "#delivery" }
    ];

    let userMenuSettings = [
      { label: "Account", link: "#account" },
      { label: "Order History", link: "#order" },
      { label: "Meal Planer", link: "#meal" }
    ];

    return (
      <div>
        <Header title={title}>
          <Logo imgUrl={burger} alt={title} />
          <HeaderMenu links={links} />
          <UserMenu />
          <DropDownMenu />
          <Authentication />
        </Header>
        <OrderHistory orders={orderHistory} />
      </div>
    );
  }
}
