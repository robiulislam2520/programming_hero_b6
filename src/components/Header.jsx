import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>T-Shirt</h1>
          </Link>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
