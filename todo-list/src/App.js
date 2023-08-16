import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Task from "./task";
import Navbar from "./navBar";
import Footer from "./footer"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;