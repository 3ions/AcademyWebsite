import React from "react";
import About from "../components/about-us/About";
import Contact from "../components/contact/Contact";
import Gallery from "../components/gallery/gallery";
import Landing from "../components/home/Landing";
import Navbar from "../components/navbar/Navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Page;
