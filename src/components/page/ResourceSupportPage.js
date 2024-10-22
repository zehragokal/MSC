import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ResourceSupportPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">Resource Suppport</header>
      <p style={{ textAlign: "center", margin: "50px" }}>
        Some text about the kinds of resources we provide, then links to the
        actual resources.
      </p>
      <Footer />
    </div>
  );
};

export default ResourceSupportPage;
