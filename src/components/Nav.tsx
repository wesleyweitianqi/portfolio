import React from "react";
import "./nav.scss";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavComp: React.FC = () => {
  return (
    <Navbar collapseOnSelect  variant="light" fixed-top>
    <Navbar.Toggle />
      <Navbar.Brand href="#home">Wesley</Navbar.Brand>
      <Navbar.Collapse>

      <Nav className="me-auto">
        <Nav.Item>

        <Nav.Link eventKey="1" href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>

        <Nav.Link eventKey="2" href="#about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>

        <Nav.Link eventKey="3" href="#skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>

        <Nav.Link eventKey="4" href="#projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="5" href="#contact">Contact</Nav.Link>

        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
    
  </Navbar>
  );
};

export default NavComp;
