import React from "react";
import "./nav.scss";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from "react-bootstrap/NavItem";

const NavComp: React.FC = () => {
  return (
    <>
    
    <Navbar  collapseOnSelect variant="light" expand="lg" fixed="top" style={{ position: "sticky" }}>
      <Navbar.Brand href="#top">Wesley</Navbar.Brand>
      <Navbar.Toggle id="nav-toggle-button" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <NavItem>
            <Nav.Link eventKey="1" href="#home">Home</Nav.Link>
          </NavItem>
          <NavItem>

            <Nav.Link eventKey="2" href="#about">About</Nav.Link>
          </NavItem>
          <NavItem>

            <Nav.Link eventKey="3" href="#skills">Skills</Nav.Link>
          </NavItem>
          <NavItem>

            <Nav.Link eventKey="4" href="#projects">Projects</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="5" href="#contact">Contact</Nav.Link>

          </NavItem>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    {/* <nav className="dummy"></nav>  */}
    </>
  );
};

export default NavComp;
