import React, { Component } from "react";
import DropDownMenuList from "./DropDownMenuList";

export default class DropDownMenu extends Component {
  render() {
    let userMenuSettings = [
      { label: "Account", link: "#account" },
      { label: "Order History", link: "#order" },
      { label: "Meal Planer", link: "#meal" }
    ];
    return (
      <div>
        <DropDownMenuList items={userMenuSettings} />
        <button>Log out</button>
      </div>
    );
  }
}
