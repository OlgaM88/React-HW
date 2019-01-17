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
import OrderHistory from "./OrderHistory";

import orderHistory from "../JSON/order-history.json";
import menu from "../JSON/menu.json";

const INITIAL_STATE = {
  title: "Burger Food"
};

export default class App extends Component {
  state = {
    ...INITIAL_STATE,
    filter: "",
    items: [...menu]
  };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log(e.target.value);
  };
  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
    const { filter } = this.state;

    this.getFilteredItems(filter);
  };

  getFilteredItems = filter => {
    const { items } = this.state;
    let newItems = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    this.setState({ items: newItems });
  };
  render() {
    const { title, items, filter } = this.state;

    let links = [
      { label: "Menu", link: "#menu" },
      { label: "About", link: "#about" },
      { label: "Home", link: "#home" },
      { label: "Contact", link: "#contact" },
      { label: "Delivery", link: "#delivery" }
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
        <MenuList products={items} />
      </div>
    );
  }
}
