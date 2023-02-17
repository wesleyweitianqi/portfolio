import React from "react";
import "./about.scss";
import profile from "../assets/Profile.jpg";
import { MdLocationOn } from "react-icons/md";
import Rex from "../doc/Rex-Logo-Vector.png";

const About: React.FC = () => {
  return (
    <div id="about" className="island">
      {/* <div className="space"></div> */}
      <div className="about-container" data-name="about">
        <div id="brief">
          <p id="topic">Hello</p>
          <p>
            With over 5 years of engineering experience in the power
            distribution industry, I have discovered my passion for utilizing
            software and technology to solve intricate engineering problems.
            After completing a coding bootcamp at Lighthouse Labs, where I
            developed expertise in coding MERN projects, I am currently
            developing a production schedule app at Rex to track production
            progress and provide query services. I am now seeking a software
            developer position in an innovative company where I can apply my
            skills and knowledge to help drive the engineering field forward.
          </p>
        </div>
        <div className="profile">
          <img src={profile} alt="profile" />
          <div className="location">
            <MdLocationOn />
            <span> Toronto Canada</span>
          </div>
        </div>
      </div>
      <div className="employment text-white align-items-center">
        <p className="topic">Employment</p>
        <div className="container-fluid">
          <div className="row text-white">
            <div className="col-4 align-self-center">2022-Current</div>
            <img className="col-3" src={Rex} alt="Rex-logo" />
            <div className="col-4 text-end">
              <div className="mb-2">Junior Software Developer</div>
              <div className="address">Vaughan Ontario</div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div id="ToSkills" className="row text-white">
            <div className="col-4 align-self-center">2018-2022</div>
            <img className="col-3" src={Rex} alt="Rex-logo" />
            <div className="col-4 text-end">
              <div className="mb-2">Design Engineer and Programmer</div>
              <div className="address">Vaughan Ontario</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
