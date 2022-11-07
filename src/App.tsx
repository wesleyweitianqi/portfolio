import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import "./app.scss";
import Home from "./components/Home";
import About from './components/About';
import Skill from './components/Skill';

function App() {
  return (
    
        <div className="App">
          <Nav />
          <Home />
          <About />
          <Skill />
        </div>
    
  );
}

export default App;
