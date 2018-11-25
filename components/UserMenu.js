import React, { Component } from "react";

export default class UserMenu extends Component {
  state = {
    userName: "Bob Ross",
    logo: "user.logo"
  };
  render() {
    const { userName, logo } = this.state;
    return (
      <div userName={userName}>
        <img src={logo} alt={userName} />
        <span>{userName}</span>
      </div>
    );
  }
}
