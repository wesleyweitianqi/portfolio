import React from "react";
import "./about.scss";
import profile from "../assets/Profile.jpg";
import { MdLocationOn } from "react-icons/md";
import Rex from "../doc/Rex-Logo-Vector.png";

const About: React.FC = () => {
  return (
    <div id="about" className="island">
      <div className="space"></div>
      <div className="about-container" data-name="about">
        <div id="brief">
          <p id="topic">Hello</p>
          <p>
            My name is Wesley Wei, in search of a career in full-stack or
            front-end development. I am eager to continue learning and
            collaborate with other developers of various experience levels. As a
            graduate from <a target="_blank" rel="noreferrer" className="lhl" href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>, I was involved in a
            fast-paced learning environment comprised of small to large projects
            using popular front and back-end languages. I also transitioned from
            the power distribution industry as a design engineer and programmer
            at a transformer manufacturing company with transferable skills in
            problem-solving and project management that will help to kickstart a
            new career in programming!
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
      <div className="employment text-white">
        <p className="topic">Employment</p>
        <div className="row text-white">
          <div className="col-3">2022-Current</div>
          <img className="col-3" src={Rex} alt="Rex-logo"/>
          <div className="col-5">
            <div className="mb-2">Junior Software Developer</div>
            <div>Vaughan Ontario</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
