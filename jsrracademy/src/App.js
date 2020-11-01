import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "./page";
import Login from "./components/login";
import "./App.css";

import StaffLogin from "./components/login/StaffLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Page} exact />
        <Route path="/students" component={Login} exact />
        <Route path="/staffs" component={StaffLogin} exact />
      </Switch>
    </Router>
  );
}

export default App;
