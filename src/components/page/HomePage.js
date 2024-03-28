import React from "react";
import Navbar from "../Navbar";
import mscLogo from "../images/mscLogo.png";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <header className="App-header">
        <img src={mscLogo} className="msc-logo-spin" alt="logo" />
        Welcome to the MSC site!
      </header>
    </div>
  );
};

export default HomePage;
