import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button } from "../common/Button";
import { loginStudent } from "../../actions/authActions";
import TextField from "../common/TextField";
import "./login.css";

class StudentLogin extends Component {
  constructor() {
    super();
    this.state = {
      studentID: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isStudentAuth) {
      this.props.history.push("/students/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isStudentAuth) {
      this.props.history.push("/students/dashboard");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const studentData = {
      studentID: this.state.studentID,
      password: this.state.password,
    };

    this.props.loginStudent(studentData);
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="login-container">
        <div className="login-wrapper">
          <div className="align-login">
            <form onSubmit={this.onSubmit}>
              <TextField
                forType="studentID"
                title="Student ID *"
                id="studentID"
                type="text"
                name="studentID"
                placeholder="Enter Your Student ID"
                value={this.state.studentID}
                onChange={this.onChange}
                error={errors.studentID}
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
            <Link to="/staffs">
              <Button dark="true">Staff LogIn</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

StudentLogin.propTypes = {
  loginStudent: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginStudent })(StudentLogin);
