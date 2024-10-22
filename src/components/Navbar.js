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
              <NavLink to="/who-we-are" className="nav-link">
                Who We Are
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
                What We Do
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/council-gatherings" className="dropdown-item">
                    Council Gatherings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/resource-support" className="dropdown-item">
                    Resource Support
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/regional-training-days"
                    className="dropdown-item"
                  >
                    Regional Training Days
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/our-community" className="nav-link">
                Our Community
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">
                Shop
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
