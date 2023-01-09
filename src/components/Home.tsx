import React from "react";
import "./home.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const Home: React.FC = () => {
  return (
    <>
      <div id="home">
        <div id="home-container">
          <div id="introduction">
            <p className="topic">
              Hello, I am <span>Wesley</span>
            </p>
            <div>
              <span className="topic">a </span>
              <span className="typewriter">
                <Typewriter
                  words={["Developer", "Programmer", "Engineer"]}
                  loop={100}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </div>
          </div>
          <div id="icons">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/wesleywei-tech/" className="linkedin"><BsLinkedin style={{color:"rgb(37, 33, 179)"}}/></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/wesleyweitianqi" className="github"><BsGithub style={{color:"white"}}/></a>
            <a target="_blank" rel="noreferrer" href="mailto:wesleytianqiwei@gmail.com" className="email"><MdEmail style={{color:"rgb(160, 115, 84)"}}/></a>
          </div>
        </div>

        <div id="reachMe">
          <h3>
            <a href="https://resume.creddle.io/resume/iy2js0o7wgf" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </h3>
          <h3>
            <a href="#contact">Let's talk</a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
