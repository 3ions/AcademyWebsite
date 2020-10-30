import React from "react";
import Video from "../../videos/video.mp4";
import "./about.css";

function About() {
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
          <div className="title">
            <h1>About Us</h1>
          </div>
          <p className="text1">
            <strong className="important">
              Jnakshi Sri RajaRajeshwari Academy{" "}
            </strong>
            (JSRRA) is an incompatible <b>School of Learning</b> lead by diverse
            and highly trained faculty.
          </p>
          <p className="text2">
            <span className="subtitle">Vision: </span>
            We shall pursue every student of our Academy to take responsibility
            and ownership for their systematic learning by guiding them to
            develop their Academic skill, Interpersonal and Intrapersonal skill
            for achieving good career and bright future. We are located in
            India’s technology capital, Bangalore, in close proximity to Wilson
            Garden. Our teaching and training covers students from STD …….
            including all range of students from State Board, CBSE and ICSE. We
            also coach 11 th  ,12 th  students (ISE) and 1 st  PUC, 2 nd  PUC
            students (NCERT). We extend our training to Degree students pursuing
            their Bachelor of Engineering (B.E) in Electronics and Communication
            (ECE),………. We also provide training and internships for students in
            fields of Web Development, Machine Learning, Python…….. We are
            committed to giving attention to each student and helping him grow
            career wise. Our values include: Learning : Create and support an
            environment to  motivate all  students of our Academy  to 
            systematically  learn and excel. Integrity: Conducting ourselves
            with responsibility and honesty. Service:  Dedicate ourselves to
            deliver excellent service. Relationship:  Create and maintain good
            relationship and respect  with students, families, staff and other
            stack holders, of  our Academy in particular and the community in
            general.
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

export default About;
