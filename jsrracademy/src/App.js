import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/home/Home";
import about from "./components/about-us/aboutus";
import Contact from "./components/contact/Contact";
import gallery from "./components/gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={about} />
        <Route path="/contact-us" exact component={Contact} />
        <Route path="/gallery" exact component={gallery} />
      </Switch>
    </Router>
  );
}

export default App;
