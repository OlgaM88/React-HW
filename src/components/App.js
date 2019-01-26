import React, { Component } from 'react';
import Header from './Header/Header';

import MenuList from './Menulist/MenuList';
import FilterForm from './FilterForm';
import OrderHistory from './OrderHistory/OrderHistory';

import orderHistory from '../JSON/order-history.json';
import menu from '../JSON/menu.json';

export default class App extends Component {
  state = {
    filter: '',
    items: [...menu],
    filteredItems: [],
  };

  componentDidMount() {
    const { items } = this.state;
    this.setState({
      items,
      filteredItems: [...items],
    });
  }

  getFilteredItems = filter => {
    const { items } = this.state;

    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );

    this.setState({ filteredItems });
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.getFilteredItems(value);
  };

  render() {
    const { filteredItems, filter } = this.state;

    return (
      <div>
        <Header />
        <OrderHistory orders={orderHistory} />
        <FilterForm value={filter} onChange={this.onChange} />
        <MenuList products={filteredItems} />
      </div>
    );
  }
}
