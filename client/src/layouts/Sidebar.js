import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="shadow h-screen bg-slate-800 text-white">
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-56">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/my-appointments">My Appointments</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
