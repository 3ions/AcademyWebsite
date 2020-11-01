import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import TextField from "../common/TextField";
import "./login.css";

class StudentLogin extends Component {
  constructor() {
    super();
    this.state = {
      studentID: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.setAuthToken = this.setAuthToken.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      studentID: this.state.studentID,
      password: this.state.password,
    };

    axios
      .post("/students/login", userData)
      .then((res) => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        this.setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        console.log(decoded);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setAuthToken = (token) => {
    if (token) {
      // Apply to every request
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-wrapper">
          <div className="align-login">
            <TextField
              forType="studentID"
              title="Student ID *"
              id="studentID"
              type="text"
              name="studentID"
              placeholder="Enter Your Student ID"
              value={this.state.studentID}
              onChange={this.onChange}
            />
            <TextField
              forType="password"
              title="Password *"
              id="password"
              type="text"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <div className="btn-align">
              <Button dark="true">Log In</Button>
            </div>
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

export default StudentLogin;
