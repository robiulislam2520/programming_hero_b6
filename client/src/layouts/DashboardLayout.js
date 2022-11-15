import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div >
        <div className="flex justify-between">
          <Sidebar/>
          <div className="grow py-6 px-8 bg-[#F1F5F9]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
