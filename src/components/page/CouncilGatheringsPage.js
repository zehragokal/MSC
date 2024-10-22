import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";

const CouncilGatheringsPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">Council Gatherings</header>
      <h1>
        <NavLink to="/summit" className="nav-link">
          Summit
        </NavLink>
      </h1>
      <h1>
        <NavLink to="/retreat" className="nav-link">
          Retreat
        </NavLink>
      </h1>
      <h1>
        <NavLink to="/conference" className="nav-link">
          Conference
        </NavLink>
      </h1>
      <Footer />
    </div>
  );
};

export default CouncilGatheringsPage;
