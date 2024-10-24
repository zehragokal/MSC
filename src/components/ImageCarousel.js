import React from "react";
import rameez from "./images/rameez.JPG";
import maryam from "./images/maryam.JPG";
import mscHands from "./images/mscHands.JPG";

const ImageCarousel = () => {
  return (
    <div
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-pause="false"
      data-bs-interval="2500"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={rameez}
            className="d-block"
            style={{ width: "100%", maxWidth: "720px" }}
            alt="rameez"
          />
        </div>
        <div className="carousel-item">
          <img
            src={maryam}
            className="d-block"
            style={{ width: "100%", maxWidth: "720px" }}
            alt="maryam"
          />
        </div>
        <div className="carousel-item">
          <img
            src={mscHands}
            className="d-block"
            style={{ width: "100%", maxWidth: "720px" }}
            alt="funny"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
