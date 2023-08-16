import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="nav">
      <Link to="/" className="navItem">Home</Link>
      <Link to="/task" className="navItem">Task</Link>
      <Link to="/contact" className="navItem">Conact</Link>
    </div>
    <hr />
  </>
  );
}
