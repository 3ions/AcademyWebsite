import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about-us/About";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Contact />
    </Router>
  );
}

export default App;
