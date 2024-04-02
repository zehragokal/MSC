import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import group from "../images/group.JPG";

const OurCommunityPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">
        Our Community
        <img src={group} className="body-image" alt="group" />
      </header>
      <Footer />
    </div>
  );
};

export default OurCommunityPage;
