import React from 'react';
import './home.scss';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail} from "react-icons/md"
import profile from '../assets/Profile.jpg';
const Home:React.FC= () => {
  return (
    <div id="container">
      <div id="home">
        <div id="icons">
        <span><BsLinkedin /></span>
        <span><BsGithub /></span>
        <span><MdEmail /></span>
        </div>
        <div id="introduction">
          <h1>Hello, I am Wesley</h1>
          <h2>Full-Stack Web Developer</h2>
          <h3>Application Engineer</h3>
          <h4>Mechanical Engineer</h4>
          
        </div>
      </div>
      <div id="profile">
      <img src={profile} alt="profile"/>
      </div>
     
    </div>
  )
}

export default Home
