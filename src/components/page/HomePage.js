import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomeCarousel from "../HomeCarousel";
import Map from "../Map";
import FeaturedInstagramEmbed from "../FeaturedInstagramEmbed";

const HomePage = () => {
  return (
    <div className="page">
      <Navbar />
      <HomeCarousel />
      <div>
        <header className="App-header" style={{ padding: "4%" }}>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <Map />
              </div>
              <div
                class="col-sm"
                style={{
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    marginBottom: "50px",
                  }}
                >
                  📰 Featured
                </h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FeaturedInstagramEmbed />
                </div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            "... STAND OUT FIRMLY FOR JUSTICE
          </p>
          <p className="quote" style={{ textAlign: "center" }}>
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
