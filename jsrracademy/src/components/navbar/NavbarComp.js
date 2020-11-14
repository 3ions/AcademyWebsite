import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class NavbarComp extends Component {
  render() {
    return (
      <nav className="navbar navbar-position">
        <div className="navbar-container">
          <Link to="/">
            <h1 className="navbar-logo">JSRR ACADEMY</h1>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavbarComp;
