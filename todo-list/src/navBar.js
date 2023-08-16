import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="nav">
      <Link to="/" className="navItem1">Home</Link>
      <Link to="/task" className="navItem2">Task</Link>
      <Link to="/contact" className="navItem3">Conact</Link>
    </div>
    <hr />
  </>
  );
}
