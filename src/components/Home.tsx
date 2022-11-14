import React from "react";
import "./home.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import profile from "../assets/Profile.jpg";
import { Typewriter } from "react-simple-typewriter";
// import "react-simple-typewriter/dist/index.css";

const Home: React.FC = () => {
  return (
          <>
          <div className="container">
            <div id="home">
              <div id="introduction">
                <p className="topic">Hello, I am <span >Wesley</span></p>
                <div>
                <span className="text">a </span>
                <span style={{color:"orange", fontWeight:"bold", marginLeft: "10px", fontSize:"3.5rem", background:"none"}}>
                 <Typewriter 
                  words={['Developer', 'Production Supervisor', 'Mechanical Engineer']}
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
               
               <BsLinkedin />
            
               <BsGithub />
             
               <MdEmail />
             
           </div>
            </div>
            
          </div>
          <div id="reachMe">
            <h3>Download CV</h3><h3>Let's talk</h3>
          </div>
          </>
      
  );
};

export default Home;
