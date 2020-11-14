import React from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import NavbarComp from "./NavbarComp";
import "./Navbar.css";

function NavbarMain() {
  const location = useLocation();
  console.log(location);

  if (location.pathname === "/") {
    return <Navbar />;
  } else {
    return (
      <div>
        <NavbarComp />
      </div>
    );
  }
}

export default NavbarMain;
