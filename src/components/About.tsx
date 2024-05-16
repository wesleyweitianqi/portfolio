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
            A highly skilled and dedicated Full Stack Web Developer with over 5
            years of engineering experience inthe power distribution industry.
            Throughout my career, I have been passionate about leveraging
            software and technology to solve complex engineering problems. After
            completing a coding bootcampat Lighthouse Labs, I made a successful
            transition into the fi eld of software development. And I
            amcurrently engaged in developing a production tracking web app at
            Rex. In this role, I am responsible forbuilding and updating
            production tracking app to align the user requirements with
            technical feasibility.I am now seeking new opportunities as a
            software developer in an innovative company where I canapply my
            skills and knowledge to drive technological advancements and make a
            meaningful impact.
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
              <div className="mb-2">Project Lead</div>
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
