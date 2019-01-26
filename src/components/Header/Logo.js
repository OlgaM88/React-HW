import React from 'react';

const Logo = ({ imageUrl, alt }) => (
  <a href="/" className="Logo">
    <img src={imageUrl} className="logo-img" alt={alt} />
    <h1>Burger Food</h1>
  </a>
);
export default Logo;
