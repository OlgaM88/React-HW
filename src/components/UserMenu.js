import React, { Component } from "react";

export default class UserMenu extends Component {
  state = {
    username: "Bob Ross",
    logo: "user.logo"
  };
  render() {
    const { username, logo } = this.state;
    return (
      <div>
        <img src={logo} alt={username} />
        <span>{username}</span>
      </div>
    );
  }
}
