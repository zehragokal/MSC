import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const NotFoundPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">Error 404</header>
      <h1>Page Not Found</h1>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
