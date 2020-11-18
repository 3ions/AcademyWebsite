import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import store from "./store";

import Navbar from "./components/navbar";
import Page from "./page";
import "./App.css";
import StudentLogin from "./components/login/StudentLogin";
import StaffLogin from "./components/login/StaffLogin";
import PrivateRoute from "./components/common/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import {
  logoutStudent,
  setCurrentStudent,
  logoutStaff,
  setCurrentStaff,
} from "./actions/authActions";

// Check for token
if (localStorage.jwtStudentToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtStudentToken);

  // Decode token and get student info with expiration
  const decoded = jwt_decode(localStorage.jwtStudentToken);

  // Set student and isAuthenticated
  store.dispatch(setCurrentStudent(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout student
    store.dispatch(logoutStudent());
    // Redirect to login
    window.location.href = "/students";
  }
}

// Check for token
if (localStorage.jwtStaffToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtStaffToken);

  // Decode token and get staff info with expiration
  const decoded = jwt_decode(localStorage.jwtStaffToken);

  // Set staff and isAuthenticated
  store.dispatch(setCurrentStaff(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout staff
    store.dispatch(logoutStaff());
    // Redirect to login
    window.location.href = "/staffs";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route path="/" component={Page} exact />
          <Route exact path="/students" component={StudentLogin} />
          <Route exact path="/staffs" component={StaffLogin} />
          <Switch>
            <PrivateRoute
              exact
              path="/students/dashboard"
              component={Dashboard}
            />
            <PrivateRoute
              exact
              path="/staffs/dashboard"
              component={Dashboard}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
