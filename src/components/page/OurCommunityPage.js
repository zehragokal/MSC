import React from "react";
import Navbar from "../Navbar";
import group from "../images/group.JPG";

const OurCommunityPage = () => {
  return (
    <div>
      <Navbar />
      <header className="App-header">
        Our Community
        <img src={group} className="body-image" alt="group" />
      </header>
    </div>
  );
};

export default OurCommunityPage;
