import React, { Component } from "react";
import Header from "./Header/Header";

import MenuList from "./Menulist/MenuList";
import FilterForm from "./FilterForm";
import OrderHistory from "./OrderHistory/OrderHistory";

import orderHistory from "../JSON/order-history.json";
import menu from "../JSON/menu.json";

export default class App extends Component {
  state = {
    filter: "",
    items: [...menu],
    filteredItems: []
  };

  componentDidMount = () => {
    const { items } = this.state;
    this.setState({ filteredItems: [...items] });
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

    let filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    this.setState({ filteredItems });
  };
  render() {
    const { filteredItems, filter } = this.state;

    return (
      <div>
        <Header />
        <OrderHistory orders={orderHistory} />
        <FilterForm value={filter} onChange={this.onChange} />
        <MenuList products={filteredItems} onChange={this.getFilteredItems} />
      </div>
    );
  }
}
