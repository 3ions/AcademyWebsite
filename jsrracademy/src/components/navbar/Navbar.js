import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { Button } from "../common/Button";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="home" spy={true} smooth={true} duration={500}>
          <h1 className="navbar-logo">JSRR ACADEMY</h1>
        </Link>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-links">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li className="nav-links">
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-links">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Button>Sign In</Button>
      </nav>
    );
  }
}

export default Navbar;
