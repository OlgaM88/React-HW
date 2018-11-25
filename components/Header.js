import React from "react";

const Header = ({ title, children }) => (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);
export default Header;
