import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Fact from "./pages/Fact";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="nav">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/about" className="navLink">
          About
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:factId" element={<Fact />} />
      </Routes>
    </Router>
  );
}

export default App;
