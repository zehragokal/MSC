import React from "react";
import Navbar from "../Navbar";
import mscLogo from "../images/mscLogo.png";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <header className="App-header">
        <img src={mscLogo} className="msc-logo-spin" alt="logo" />
        About Us
      </header>
    </div>
  );
};

export default AboutUsPage;
