import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button } from "../common/Button";
import { loginStaff } from "../../actions/authActions";
import TextField from "../common/TextField";
import "./login.css";

class StaffLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isStaffAuth) {
      this.props.history.push("/staffs/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isStaffAuth) {
      this.props.history.push("/staffs/dashboard");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const staffData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginStaff(staffData);
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="login-container">
        <div className="login-wrapper">
          <div className="align-login">
            <form onSubmit={this.onSubmit}>
              <TextField
                forType="email"
                title="Email ID *"
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email ID"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />
              <TextField
                forType="password"
                title="Password *"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />
              <div className="btn-align">
                <Button dark="true">Log In</Button>
              </div>
            </form>
          </div>

          <div className="staff-btn">
            <Link to="/students">
              <Button dark="true">Student LogIn</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

StaffLogin.propTypes = {
  loginStaff: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginStaff })(StaffLogin);
