import React from "react";
import "./home.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import profile from "../assets/Profile.jpg";
const Home: React.FC = () => {
  return (
          <>
          <div className="container">
            <div id="home">
              <div id="icons">
                <span>
                  <BsLinkedin />
                </span>
                <span>
                  <BsGithub />
                </span>
                <span>
                  <MdEmail />
                </span>
              </div>
              <div id="introduction">
                <h1>Hello, I am Wesley</h1>
                <h2>Full-Stack Web Developer</h2>
                <h3>Application Engineer</h3>
                <h4>Mechanical Engineer</h4>
              </div>
            </div>
            <div id="profile">
              <img src={profile} alt="profile" />
            </div>
          </div>
          <div id="reachMe">
            <h3>Download CV</h3><h3>Let's talk</h3>
          </div>
          </>
      
  );
};

export default Home;
