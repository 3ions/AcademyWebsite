import React, { useState, useEffect } from "react";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../common/Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <LinkS
          to="home"
          spy={true}
          smooth={true}
          duration={600}
          offset={-80}
          onClick={scrollToTop}
        >
          <h1 className="navbar-logo" onClick={closeMobileMenu}>
            JSRR ACADEMY
          </h1>
        </LinkS>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links">
            <LinkS
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
            >
              Contact Us
            </LinkS>
          </li>
          <li>
            <Link to="/students" className="nav-links-mobile">
              Sign In
            </Link>
          </li>
        </ul>
        <Link to="/students">{button && <Button>Sign In</Button>}</Link>
      </div>
    </nav>
  );
}

export default Navbar;
