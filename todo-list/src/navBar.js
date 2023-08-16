import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
  
   <nav>
      
      <Link to="/">Home</Link>
      <Link to="/task">About</Link>
      <Link to="/contact">Contact</Link>

    </nav>
   
  );
}

