import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <div id="dashboard">
      <div id="sidebar">
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="payments">Payments</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default DashBoard;
