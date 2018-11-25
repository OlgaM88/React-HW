import React, { Component } from "react";

export default class SignIn extends Component {
  render() {
    return (
      <div className="form-signin">
        <h2>Sign In</h2>
        <div className="container">
          <div className="container__item">
            <label value="email">E-mail</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your e-mail..."
            />
          </div>
          <div className="container__item">
            <label value="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Enter your password..."
            />
          </div>
          <button type="button" className="signin-btn">
            Sign in
          </button>
        </div>
      </div>
    );
  }
}
