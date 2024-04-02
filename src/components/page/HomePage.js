import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import mscLogo from "../images/mscLogo.png";

const HomePage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header-home">
        <img src={mscLogo} className="msc-logo-spin" alt="logo" />
        Welcome to the MSC site!
      </header>
      <Footer />
    </div>
  );
};

export default HomePage;
