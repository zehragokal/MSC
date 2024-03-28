import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="!#">
          MSC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="!#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="!#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Our Community
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="!#">
                    Summit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    Retreat
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    Conference
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
