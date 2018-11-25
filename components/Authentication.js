import React, { Component } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default class Authentication extends Component {
  state = {
    isSignIn: false,
    isSignUp: false
  };

  openSignInForm() {
    this.setState({ isSignIn: true, isSignUp: false });
  }
  openSignUpForm() {
    this.setState({ isSignIn: false, isSignUp: true });
  }
  render() {
    const { isSignIn, isSignUp } = this.state;
    return (
      <div className="wrapper">
        <div className="form-controller">
          <button
            className="controller"
            onClick={this.openSignInForm.bind(this)}
          >
            Log in
          </button>
          <button
            className="controller"
            onClick={this.openSignUpForm.bind(this)}
          >
            Sign up
          </button>
        </div>
        <div className="form-container" />
        {isSignIn && <SignIn />}
        {isSignUp && <SignUp />}
      </div>
    );
  }
}