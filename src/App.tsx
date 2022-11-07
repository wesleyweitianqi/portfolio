import React from 'react';
import { Router, Routes } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import "./app.scss";
import Home from "./components/Home";
import About from './components/About';

function App() {
  return (
    <div className="App">
    <Nav />
    <Home />
    <About />
    </div>
  );
}

export default App;
