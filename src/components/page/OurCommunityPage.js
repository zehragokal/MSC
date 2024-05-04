import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import group from "../images/group.JPG";

const OurCommunityPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">Our Community</header>
      <img src={group} className="body-image" alt="group" />
      <div>
        <h1>Societies & Organisations</h1>
        <p>Icons of all our associated groups, link to their pages</p>
        <h1>Meet The Committee</h1>
        <p>Meet the comm pics & people</p>
      </div>
      <Footer />
    </div>
  );
};

export default OurCommunityPage;
