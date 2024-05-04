import React from "react";
import Navbar from "../Navbar";
import ImageCarousel from "../ImageCarousel";
import Footer from "../Footer";

const AboutUsPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">About Us</header>
      <div class="container-fluid text-center body">
        <div class="row">
          <div class="col-sm-7 d-flex align-items-center">
            <ImageCarousel />
          </div>
          <div class="col-sm-5 d-flex align-items-center body-text">
            <div>
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h1>Who We Are</h1>
              <h1>What We Do</h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
