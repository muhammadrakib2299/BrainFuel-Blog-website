import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      {/* Navbar */}
      <NavBar></NavBar>

      {/* Packet */}
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
