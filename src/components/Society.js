import React from "react";

const Society = ({ name, logo, link }) => {
  return (
    <div
      style={{
        display: "inline-block", // Keeps the component inline
        transition: "transform 0.3s", // Smooth transition for hover effect
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // Enlarge on hover
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} // Return to original size
    >
      <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
        <div>
          <img
            src={logo}
            alt="logo"
            style={{
              margin: "3%",
              height: "15vmin",
              borderRadius: "15px", // Rounds the corners
              transition: "transform 0.3s", // Smooth transition for hover effect
            }}
          />
        </div>
        <div>
          <h4 style={{ transition: "transform 0.3s", marginTop: "10px" }}>
            {name}
          </h4>
        </div>
      </a>
    </div>
  );
};

export default Society;
