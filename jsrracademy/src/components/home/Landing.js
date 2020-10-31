import React from "react";
import Home from "./Home";
import "./Home.scss";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <Home />
      </div>
      <div className="land-cont">
        <p class="items-1">WELCOME TO JSRR ACADEMY!</p>

        <p class="items-2">
          "The Cave You Fear <br />
          to Enter Holds The Treasure You Seek"
        </p>
        <p class="items-3">YOUR UNFAILING LOVE IS BETTER THAN LIFE ITSELF.</p>
      </div>
    </>
  );
};

export default Landing;
