import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import mscHands from "../images/mscHands.JPG";

const RetreatPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">
        Retreat
        <img src={mscHands} className="body-image" alt="funny pic" />
      </header>
      <Footer />
    </div>
  );
};

export default RetreatPage;
