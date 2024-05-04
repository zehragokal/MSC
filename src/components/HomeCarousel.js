import React from "react";
import rameez from "./images/rameez.JPG";
import maryam from "./images/maryam.JPG";
import mscHands from "./images/mscHands.JPG";
import mscLogo from "./images/mscLogo.png";

const HomeCarousel = () => {
  return (
    <div className="carousel-container position-relative">
      <img
        src={mscLogo}
        className="msc-logo-spin position-absolute top-0 start-50 translate-middle-x"
        alt="logo"
      />
      <div
        className="carousel slide carousel-fade position-relative"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={rameez}
              className="d-block"
              style={{ maxWidth: "720px" }}
              alt="rameez"
            />
          </div>
          <div className="carousel-item">
            <img
              src={maryam}
              className="d-block"
              style={{ maxWidth: "720px" }}
              alt="maryam"
            />
          </div>
          <div className="carousel-item">
            <img
              src={mscHands}
              className="d-block"
              style={{ maxWidth: "720px" }}
              alt="funny"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
