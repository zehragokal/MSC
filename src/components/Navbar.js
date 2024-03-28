import React from "react";
import { NavLink } from "react-router-dom";
import mscLogo from "./images/mscLogo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={mscLogo} className="msc-logo" alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/our-community" className="nav-link">
                Our Community
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                href="!#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/summit" className="dropdown-item">
                    Summit
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/retreat" className="dropdown-item">
                    Retreat
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/conference" className="dropdown-item">
                    Conference
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
