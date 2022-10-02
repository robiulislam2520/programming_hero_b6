import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/about/ceo">CEO</Link>
      <Link to="friends">Friends</Link>
    </div>
  );
};

export default Header;
