import React, { Component } from "react";
import Header from "./Header";
import logo from "../burger.svg";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import HeaderMenu from "./HeaderMenu";
import DropDownMenu from "./DropDownMenu";
import Authentication from "./Authentication";
import MenuList from "./MenuList";
import FilterForm from "./FilterForm";
import AddComment from "./AddComment";

import orderHistory from "../JSON/order-history.json";
import menu from "../JSON/menu.json";

import OrderHistory from "./OrderHistory";

const INITIAL_STATE = {
  title: "Burger Food"
};

export default class App extends Component {
  state = {
    ...INITIAL_STATE,
    filter: "",
    items: [...menu],
    message: "Please leave a comment..."
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
    const { filter } = this.state;

    this.getFilteredItems(filter);
  };

  handleMessageChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  getFilteredItems = filter => {
    const { items } = this.state;
    let newItems = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    this.setState({ items: newItems });
  };
  render() {
    const { title, items, filter, message } = this.state;

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
        <Header>
          <Logo imageUrl={logo} alt={title} />
          <HeaderMenu links={links} />
          <UserMenu />
          <DropDownMenu />
          <Authentication />
        </Header>
        <OrderHistory orders={orderHistory} />
        <FilterForm value={filter} onChange={this.onChange} />
        <MenuList products={items} message={message} onChange={this.onChange} />
      </div>
    );
  }
}
