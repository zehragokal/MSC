import React from "react";
import map from "./images/ukMap.png";
import { NavLink } from "react-router-dom";

const Map = () => {
  return (
    <div className="map">
      <h2 style={{ textAlign: "center" }}>🌟 40+ ABSocs across the UK</h2>
      <div className="distribution-map">
        <img src={map} alt="map" />
        <NavLink to="/our-community" className="nav-link">
          <button className="map-point" style={{ top: "78%", left: "48%" }}>
            <div className="content">
              <div className="centered-y">
                <p style={{ fontSize: "large" }}>SOUTH & WALES</p>
                <p style={{ fontWeight: "bolder" }}>
                  6 ABSocs from Swansea to Southampton
                </p>
              </div>
            </div>
          </button>
        </NavLink>
        <NavLink to="/our-community" className="nav-link">
          <button className="map-point" style={{ top: "54%", left: "62%" }}>
            <div className="content">
              <div className="centered-y">
                <p style={{ fontSize: "large" }}>NORTH</p>
                <p style={{ fontWeight: "bolder" }}>
                  8 ABSocs from Durham to Sheffield
                </p>
              </div>
            </div>
          </button>
        </NavLink>
        <NavLink to="/our-community" className="nav-link">
          <button className="map-point" style={{ top: "77%", left: "70%" }}>
            <div className="content">
              <div className="centered-y">
                <p style={{ fontSize: "large" }}>LONDON</p>
                <p style={{ fontWeight: "bolder" }}>
                  18 ABSocs from UCL to Surrey
                </p>
              </div>
            </div>
          </button>
        </NavLink>
        <NavLink to="/our-community" className="nav-link">
          <button className="map-point" style={{ top: "68%", left: "57.5%" }}>
            <div className="content">
              <div className="centered-y">
                <p style={{ fontSize: "large" }}>MIDLANDS</p>
                <p style={{ fontWeight: "bolder" }}>
                  11 ABSocs from Oxford to Keele
                </p>
              </div>
            </div>
          </button>
        </NavLink>
        <NavLink to="/our-community" className="nav-link">
          <button className="map-point" style={{ top: "34%", left: "53%" }}>
            <div className="content">
              <div className="centered-y">
                <p style={{ fontSize: "large" }}>SCOTLAND</p>
                <p style={{ fontWeight: "bolder" }}>
                  3 ABSocs from Aberdeen to Glasgow
                </p>
              </div>
            </div>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Map;
