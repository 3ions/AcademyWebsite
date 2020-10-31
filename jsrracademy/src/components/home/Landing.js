import React from "react";
import Home from "./Home";
import "./Home.css";

const Landing = () => {
  return (
    <>
      <div className="landing" id="home">
        <Home />
      </div>
      <div className="land-cont">
        <p className="items-1">
          I WILL PRAISE YOU LORD, WITH ALL MY HEART, I WILL TELL OF ALL THE
          MARVELOUS THINGS YOU HAVE DONE.
        </p>

        <p className="items-2">I WILL GIVE THANKS TO YOU, WITH ALL MY HEART.</p>

        <p className="items-3">
          YOUR UNFAILING LOVE IS BETTER THAN LIFE ITSELF.
        </p>
      </div>
    </>
  );
};

export default Landing;
