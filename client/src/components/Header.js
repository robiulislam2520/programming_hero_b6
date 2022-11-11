import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItem = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="bg-[#323848] py-1">
      <div className="container mx-auto navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-[#323848] w-80 rounded"
            >
              {menuItem}
            </ul>
          </div>
          <Link to='/' className="lg:text-2xl sm:text-lg font-bold text-white">Doctors Portal</Link>
        </div>
        <div className="navbar-center hidden text-white lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn btn-secondary btn-md	">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
