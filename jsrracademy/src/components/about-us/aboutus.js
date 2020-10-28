import React from "react";
import Video from "../../videos/video.mp4";
import "./aboutus.css";

function aboutus() {
  return (
    <>
      <div className="about-section">
        <div className="herobg">
          <video
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
            className="videobg"
          />
        </div>
        <div className="inner-container">
          <h1>About Us</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            velit ducimus, enim inventore earum, eligendi nostrum pariatur
            necessitatibus eius dicta a voluptates sit deleniti autem error eos
            totam nisi neque voluptates sit deleniti autem error eos totam nisi
            neque.
          </p>
          <div className="skills">
            <span>Web Design</span>
            <span>Photoshop & Illustrator</span>
            <span>Coding</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default aboutus;
