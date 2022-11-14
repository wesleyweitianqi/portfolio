import React from "react";
import "./about.scss";
import profile from "../assets/Profile.jpg";
import { MdLocationOn } from 'react-icons/md'

const About: React.FC = () => {
  return (
    <div className="island">
    <div className="about-container">
      <div id="brief">
        <p id="topic">Hello</p>
        <p>
          Analytical Full stack Web Developer with a background in Mechanical
          Engineering. I love learning new technologies and converting data into
          visualization that has an active interface that is useful to the end
          users that drew me into web development. I enjoy creating applications
          that are functional, cool, unique and helpful the the daily lives of
          customers.
        </p>
      </div>
      <div className="profile">
        <img src={profile} alt="profile" />
        <div className="location"><MdLocationOn />
        <span> Toronro Canada</span>
        </div>
        
      </div>
    </div>

    </div>
  );
};

export default About;
