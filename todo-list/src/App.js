import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navBar";
import Home from "./home";
import Task from "./task";

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
       
      </Routes>
    </Router>
    </>
  );
}

export default App;