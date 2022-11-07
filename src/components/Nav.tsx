import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail} from "react-icons/md"

const Nav:React.FC= () => {
  return (
    <div id="grid">
      <span><em>WESLEY</em></span>
      <span></span>
      <ul id="link">
        <li>
          <NavLink to="home" style={{textDecoration:'none'}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="about" style={{textDecoration:'none'}}>About</NavLink>
        </li>
        <li>
          <NavLink to="skills" style={{textDecoration:'none'}}>Skills</NavLink>
        </li>
        <li>
          <NavLink to="projects" style={{textDecoration:'none'}}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="contacts" style={{textDecoration:'none'}}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
