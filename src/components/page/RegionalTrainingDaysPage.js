import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RegionalTrainingDaysPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">Regional Training Days</header>
      <p style={{ textAlign: "center", margin: "50px" }}>
        MSC provides region-specific training to ABSoc committees across the
        country. (is this the same as a strategy day?)
      </p>
      <Footer />
    </div>
  );
};

export default RegionalTrainingDaysPage;
