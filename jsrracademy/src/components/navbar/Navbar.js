import React, { Component } from "react";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../common/Button";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };

    return (
      <nav className="NavbarItems">
        <LinkS
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onClick={scrollToTop}
        >
          <h1 className="navbar-logo">JSRR ACADEMY</h1>
        </LinkS>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links">
            <LinkS
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={600}
            >
              Home
            </LinkS>
          </li>
          <li className="nav-links">
            <LinkS
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={600}
            >
              About Us
            </LinkS>
          </li>
          <li className="nav-links">
            <LinkS
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              duration={600}
            >
              Gallery
            </LinkS>
          </li>
          <li className="nav-links">
            <LinkS
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={600}
            >
              Contact Us
            </LinkS>
          </li>
        </ul>
        <Link to="/students">
          <Button>Sign In</Button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
