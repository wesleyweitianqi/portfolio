import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav: React.FC = () => {
  return (
    <nav id="grid">
      <table>
        <tr>
          <td>
            WESLEY
          </td>
          <td>
            <ul id="link">
              <li>
                <NavLink to="home" style={{ textDecoration: "none" }}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="about" style={{ textDecoration: "none" }}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="skills" style={{ textDecoration: "none" }}>
                  SKILLS
                </NavLink>
              </li>
              <li>
                <NavLink to="projects" style={{ textDecoration: "none" }}>
                  PROJECTS
                </NavLink>
              </li>
              <li>
                <NavLink to="contacts" style={{ textDecoration: "none" }}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </nav>
  );
};

export default Nav;
