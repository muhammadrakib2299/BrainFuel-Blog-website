import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

function MainLayout() {
  return (
    <div>
      {/* Navbar */}
      <NavBar></NavBar>

      {/* Packet */}
      <div>
        <Outlet></Outlet>
      </div>

      {/* Foote */}
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
