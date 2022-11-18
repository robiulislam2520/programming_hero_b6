import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div className="shadow h-screen bg-slate-800 text-white">
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-56">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {!isAdmin && (
            <>
              <li>
                <Link to="/dashboard/my-appointments">My Appointments</Link>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <Link to="/dashboard/allusers">All users</Link>
              </li>
              <li>
                <Link to="/dashboard/adddoctor">Add a doctor</Link>
              </li>
              <li>
                <Link to="/dashboard/managedoctors">Manage Doctor doctor</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
