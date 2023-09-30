import React from "react";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <AppNav />
      <Outlet /> {/* like as children */}
      <footer style={{ marginTop: "10rem" }}>this is footer section</footer>
    </div>
  );
}

export default Layout;
