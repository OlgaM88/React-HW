import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div className="form-signup">
        <h2>Sign Up</h2>
        <div className="container">
          <div className="container__item">
            <label value="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username..."
            />
          </div>
          <div className="container__item">
            <label value="email">E-mail</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your e-mail..."
            />
          </div>
          <div className="container__item">
            <label value="phone">Phone</label>
            <input type="text" name="phone" placeholder="Enter your phone..." />
          </div>
          <div className="container__item">
            <label value="password">Passward</label>
            <input
              type="text"
              name="password"
              placeholder="Enter your password..."
            />
          </div>

          <button type="button" className="signup-btn">
            Sign up
          </button>
        </div>
      </div>
    );
  }
}
