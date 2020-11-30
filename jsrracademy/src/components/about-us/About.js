import React from "react";
import Video from "../../videos/video.mp4";
import "./about.css";

function About() {
  return (
    <>
      <div className="about-section" id="about">
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
          <div className="title">
            <h1>About Us</h1>
          </div>
          <p className="text1">
            <strong className="important">
              Jnanakshi Sri RajaRajeshwari Academy{" "}
            </strong>
            (JSRRA) is an incompatible <b>School of Learning</b> lead by diverse
            and highly trained faculty.
          </p>
          <p className="text2 remove">
            <span className="subtitle">Vision: </span>
            We shall pursue every student of our Academy to take responsibility
            and ownership for their systematic learning by guiding them to
            develop their Academic skill, Interpersonal and Intrapersonal skill
            for achieving good career and bright future.{"\n"}
          </p>
          <p className="text2">
            <b>Our values include: </b>
            {"\n"}
          </p>
          <p className="text2">
            <span className="subtitle">Learning: </span> Create and support an
            environment to motivate all students of our Academy to
            systematically learn and excel. {"\n"}
          </p>
          <p className="text2 remove">
            <span className="subtitle">Integrity: </span> Conducting ourselves
            with responsibility and honesty. {"\n"}
          </p>
          <p className="text2 remove">
            <span className="subtitle">Service: </span> Dedicate ourselves to
            deliver excellent service. {"\n"}
          </p>
          <p className="text2">
            <span className="subtitle">Relationship: </span> Create and maintain
            good relationship and respect with students, families, staff and
            other stakeholders, of our Academy in particular and the community
            in general.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
