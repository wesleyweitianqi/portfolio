import React from "react";
import "./about.scss";
import Experience from "./Experience";
import Education from "./Education";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div id="brief">
        <p id="hello">Hello!</p>
        <p>
          Analytical Full stack Web Developer with a background in Mechanical
          Engineering. I love learning new technologies and converting data into
          visualization that has an active interface that is useful to the end
          users that drew me into web development. I enjoy creating applications
          that are functional, cool, unique and helpful the the daily lives of
          customers.
        </p>
      </div>
      <div className="exp-edu">
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default About;
