import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex justify-between gap-5">
          <div className="shadow h-screen bg-gray-300">
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80text-base-content">
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
