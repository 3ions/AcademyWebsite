import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutStudent, logoutStaff } from "../../actions/authActions";

import "./Navbar.css";

class NavbarComp extends Component {
  constructor() {
    super();
    this.state = {
      click: false,
      homeLink: "",
    };

    this.setHomeLink = this.setHomeLink.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.onStaffLogout = this.onStaffLogout.bind(this);
    this.onStudentLogout = this.onStudentLogout.bind(this);
  }

  setHomeLink() {
    const { isStudentAuth, isStaffAuth } = this.props.auth;

    if (isStudentAuth) {
      return "/students/dashboard";
    } else if (isStaffAuth) {
      return "/staffs/dashboard";
    } else {
      return "/";
    }
  }

  handleClick() {
    this.setState((prevState) => ({ click: !prevState.click }));
  }

  closeMobileMenu() {
    this.setState({ click: false });
  }

  onStudentLogout(e) {
    e.preventDefault();
    this.props.logoutStudent();
  }

  onStaffLogout(e) {
    e.preventDefault();
    this.props.logoutStaff();
  }

  render() {
    const { isStudentAuth, isStaffAuth, student, staff } = this.props.auth;

    const staffNav = (
      <ul
        className={this.state.click ? "nav-menu active nav-auth" : "nav-menu"}
        onClick={this.closeMobileMenu}
      >
        <li className="nav-links active">
          <Link to="/staffs/studentReg" onClick={this.closeMobileMenu}>
            Register Student!
          </Link>
        </li>
        <li className="nav-links active">
          <Link to="/staffs/register" onClick={this.closeMobileMenu}>
            Register Staff!
          </Link>
        </li>
        <li className="nav-links active">
          <a href="/" onClick={this.onStaffLogout}>
            <img
              className="rounded-circle"
              src={staff.avatar}
              alt={staff.name}
              style={{ width: "25px", marginRight: "7px", marginTop: "5px" }}
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const studentNav = (
      <ul
        className={this.state.click ? "nav-menu active nav-auth" : "nav-menu"}
        onClick={this.closeMobileMenu}
      >
        <li className="nav-links active">
          <Link to="/students/assignment" onClick={this.closeMobileMenu}>
            Assignments
          </Link>
        </li>
        <li className="nav-links active">
          <a href="/" onClick={this.onStudentLogout}>
            <img
              className="rounded-circle"
              src={student.avatar}
              alt={student.name}
              style={{ width: "25px", marginRight: "7px", marginTop: "5px" }}
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const menuIcon = (
      <div className="menu-icon" onClick={this.handleClick}>
        <i className={this.state.click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    );

    return (
      <nav className="navbar navbar-position">
        <div className="navbar-container">
          <Link to={this.setHomeLink} onClick={this.closeMobileMenu}>
            <h1 className="navbar-logo">JSRR ACADEMY</h1>
          </Link>
          {isStudentAuth || isStaffAuth ? menuIcon : ""}
          {isStudentAuth ? studentNav : ""}
          {isStaffAuth ? staffNav : ""}
        </div>
      </nav>
    );
  }
}

NavbarComp.propTypes = {
  logoutStudent: PropTypes.func.isRequired,
  logoutStaff: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutStudent, logoutStaff })(
  NavbarComp
);
