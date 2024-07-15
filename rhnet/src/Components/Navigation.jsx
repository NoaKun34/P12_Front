import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navigation() {
  return (
    <nav className="Navbar">
      <Link className="NavElement" to="/">Home</Link>
      <Link className="NavElement" to="/employees">Current employees</Link>
    </nav>
  );
}
