import React from 'react';

const SignUp = () => (
  <div className="form-signup">
    <h2>Sign Up</h2>
    <div className="container">
      <div className="container__item">
        <label htmlFor="username" value="username">
          Username
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username..."
          />
        </label>
      </div>
      <div className="container__item">
        <label htmlFor="email" value="email">
          E-mail
          <input type="text" name="email" placeholder="Enter your e-mail..." />
        </label>
      </div>
      <div className="container__item">
        <label htmlFor="phone" value="phone">
          Phone
          <input type="text" name="phone" placeholder="Enter your phone..." />
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

      <button type="button" className="signup-btn">
        Sign up
      </button>
    </div>
  </div>
);
export default SignUp;
