import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import group from "../images/group.JPG";
import Society from "../Society";

const OurCommunityPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">Our Community</header>
      <div>
        <h1 style={{ padding: "2%" }}>Societies & Organisations</h1>
        <p style={{ textAlign: "center" }}>
          Icons of all our associated groups, link to their pages
        </p>
        <div class="container text-center">
          <div class="row">
            <div class="col-sm">
              <Society />
            </div>
            <div class="col-sm">
              <Society />
            </div>
            <div class="col-sm">
              <Society />
            </div>
            <div class="col-sm">
              <Society />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <Society />
            </div>
            <div class="col-sm">
              <Society />
            </div>
            <div class="col-sm">
              <Society />
            </div>
            <div class="col-sm">
              <Society />
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={group} className="body-image" alt="group" />
        </div>
        <h1 style={{ padding: "2%" }}>Meet The Committee</h1>
        <p style={{ textAlign: "center" }}>Meet the comm pics & people</p>
        <h1 style={{ padding: "2%" }}>Join Us</h1>
        <p style={{ textAlign: "center" }}>
          To affiliate your society or join the MSC community, contact us at:
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default OurCommunityPage;
