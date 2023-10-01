import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function DashBoard() {
  const location = useLocation(); // this is the state that we sent from login component
  console.log(location);
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
