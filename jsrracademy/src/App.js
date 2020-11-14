import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/navbar";
import Page from "./page";
import Login from "./components/login";
import "./App.css";
import StaffLogin from "./components/login/StaffLogin";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={Page} exact />
            <Route path="/students" component={Login} exact />
            <Route path="/staffs" component={StaffLogin} exact />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
