import React from 'react';

const SignIn = () => (
  <div className="form-signin">
    <h2>Sign In</h2>
    <div className="container">
      <div className="container__item">
        <label htmlFor="email" value="email">
          E-mail
          <input type="text" name="email" placeholder="Enter your e-mail..." />
        </label>
      </div>
      <div className="container__item">
        <label htmlFor="password" value="password">
          Password
          <input
            id="password"
            type="text"
            name="password"
            placeholder="Enter your password..."
          />
        </label>
      </div>
      <button type="button" className="signin-btn">
        Sign in
      </button>
    </div>
  </div>
);
export default SignIn;
