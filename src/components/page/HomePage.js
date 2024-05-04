import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomeCarousel from "../HomeCarousel";

const HomePage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header-home">Welcome to the MSC site!</header>
      <HomeCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;
