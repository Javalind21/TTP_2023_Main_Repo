import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Task from "./task";
import Navbar from "./navBar";
import Footer from "./footer"
import Contact from "./contact";

function App() {
  return (
    <Router>
      <div id="app" className="theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;