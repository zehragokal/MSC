import React from "react";
import mscLogo from "./images/mscLogo.png";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <img src={mscLogo} className="msc-logo" alt="logo" />
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            © 2024 Muslim Student Council
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-dark" href="!#">
              <svg className="bi" width="24" height="24">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="!#">
              <svg className="bi" width="24" height="24">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="!#">
              <svg className="bi" width="24" height="24">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
