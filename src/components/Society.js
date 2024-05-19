import React from "react";
import mscLogo from "./images/mscLogo.png";

const Society = () => {
  return (
    <div>
      <div>
        <img
          src={mscLogo}
          className="msc-logo"
          alt="logo"
          style={{ margin: "3%", height: "15vmin" }}
        />
      </div>
      <div>
        <h4>Society Name</h4>
      </div>
    </div>
  );
};

export default Society;
