import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <header className="bg-white py-3 shadow">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="lgo">
            <Link to="/">
              <h2 className="text-3xl font-bold text-teal-600">BD TRAVELER</h2>
            </Link>
          </div>
          <div className="nav_menu">
            {/*
             *
             * @type: nav
             * Nav menu Style
             *
             */}
            <nav className="flex sm:justify-center space-x-4">
              {[
                ["News", "/news"],
                ["Destination", "/destination"],
                ["Blogs", "/blogs"],
                ["Contact", "/contact"],
              ].map(([title, url], index) => (
                <NavLink
                  to={url}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-lg px-3 py-2 font-medium bg-slate-100 text-slate-900"
                      : "rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                  }
                >
                  {title}
                </NavLink>
              ))}

              {/*
               *
               * @type: Login Button
               * Button style
               *
               */}
              {user?.email && (
                <button className="border border-green-500 py-2 px-4 rounded font-semibold ml-3">
                  {user?.email}
                </button>
              )}
              {user?.uid ? (
                <button
                  className="bg-teal-500 py-2 px-4 rounded font-semibold text-white ml-3"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              ) : (
                <button className="bg-red-500 py-2 px-4 rounded font-semibold text-white ml-3">
                  <Link to="/login">Login</Link>
                </button>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
