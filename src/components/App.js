import React from "react";
import "./App.css";
import Header from "./Header/Header";
import About from "./About/About";
import HomePage from "./pages/HomePage/HomePage";

import Discographie from "./Project/ProjectCard";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Router, Routes,  Route, Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/discographie" element={<Discographie />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
