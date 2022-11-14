import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import "./app.scss";
import Home from "./components/Home";
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    
        <div className="App">
          <Nav />
          <Home />
          <About />
          <Skill />
          <Project />
          <Contact />

          <div className="footer">
            <div><i className="fa-regular fa-arrow-up-to-line"></i></div>
            <div>Designed and Built by Wesley Wei</div>
            
            </div>
        </div>
    
  );
}

export default App;
