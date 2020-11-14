import React from "react";
import About from "../components/about-us/About";
import Contact from "../components/contact/Contact";
import Gallery from "../components/gallery/gallery";
import Landing from "../components/home/Landing";

const Page = () => {
  return (
    <div>
      <Landing />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Page;
