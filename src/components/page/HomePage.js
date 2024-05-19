import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomeCarousel from "../HomeCarousel";

const HomePage = () => {
  return (
    <div className="page">
      <Navbar />
      <HomeCarousel />
      <div>
        <header className="App-header" style={{ padding: "4%" }}>
          <h3>"...Stand out firmly for justice</h3>
          <p className="quote">
            ...though it may be against your own selves or your parents or near
            relatives and whether it be against rich or poor."
          </p>
          <p className="quote" style={{ margin: 0 }}>
            (The Holy Qur'an 4:135)
          </p>
        </header>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
