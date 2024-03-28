import React from "react";
import Navbar from "../Navbar";
import ImageCarousel from "../ImageCarousel";
import Footer from "../Footer";

const AboutUsPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">About Us</header>
      <ImageCarousel />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
