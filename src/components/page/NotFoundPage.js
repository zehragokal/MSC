import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const NotFoundPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header" style={{ fontSize: "20px" }}>
        Error 404: Page Not Found
      </header>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
