import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logoCrick.ico" alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Current Matches</Link>
        </li>
        <li>
          <Link to="/searchSeries">Search Series</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
