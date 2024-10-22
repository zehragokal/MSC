import React from "react";
import rameez from "./images/rameez.JPG";
import maryam from "./images/maryam.JPG";
import mscHands from "./images/mscHands.JPG";
import mscLogo from "./images/mscLogo.png";
import { NavLink } from "react-router-dom";

const HomeCarousel = () => {
  return (
    <div
      className="carousel-container position-relative"
      style={{ height: "90vh" }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "10",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={mscLogo}
          style={{
            height: "40vmin",
          }}
          alt="logo"
        />
        <div className="button-container">
          <div>
            <NavLink to="/who-we-are" className="nav-link">
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                style={{ margin: "10px 0" }}
              >
                Who are the Muslim Student Council?
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/our-community" className="nav-link">
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                style={{ margin: "10px 0" }}
              >
                Meet our Community
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className="carousel slide carousel-fade position-relative"
        data-bs-ride="carousel"
        data-bs-pause="false"
        data-bs-interval="2000"
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className="carousel-inner"
          style={{ width: "100%", height: "100%" }}
        >
          <div
            className="carousel-item active"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              src={rameez}
              className="d-block w-100"
              style={{ height: "100%", objectFit: "cover" }}
              alt="rameez"
            />
          </div>
          <div
            className="carousel-item"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              src={maryam}
              className="d-block w-100"
              style={{ height: "100%", objectFit: "cover" }}
              alt="maryam"
            />
          </div>
          <div
            className="carousel-item"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              src={mscHands}
              className="d-block w-100"
              style={{ height: "100%", objectFit: "cover" }}
              alt="mscHands"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
