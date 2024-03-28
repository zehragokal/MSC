import React from "react";
import Navbar from "../Navbar";
import mscLogo from "../images/mscLogo.png";

const OurCommunityPage = () => {
  return (
    <div>
      <Navbar />
      <header className="App-header">
        <img src={mscLogo} className="msc-logo-spin" alt="logo" />
        Our Community
      </header>
    </div>
  );
};

export default OurCommunityPage;
