import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <h1 className="text-3xl font-bold text-white">DailyUI</h1>
            </Link>
          </div>
          <div class="nav_link">
            <nav className="flex sm:justify-center space-x-4">
              {[
                ["Home", "/home"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([title, url], index) => (
                <NavLink
                  to={url}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-lg px-3 py-2 font-medium bg-slate-100 text-slate-900 "
                      : "rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900"
                  }
                >
                  {title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
