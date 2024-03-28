import React from "react";
import Navbar from "../Navbar";
import mscHands from "../images/mscHands.JPG";

const RetreatPage = () => {
  return (
    <div>
      <Navbar />
      <header className="App-header">
        Retreat
        <img src={mscHands} className="body-image" alt="funny pic" />
      </header>
    </div>
  );
};

export default RetreatPage;
