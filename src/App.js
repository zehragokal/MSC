import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import AboutUsPage from "./components/page/AboutUsPage";
import OurCommunityPage from "./components/page/OurCommunityPage";
import RetreatPage from "./components/page/RetreatPage";
import SummitPage from "./components/page/SummitPage";
import ConferencePage from "./components/page/ConferencePage";
import NotFoundPage from "./components/page/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-community" element={<OurCommunityPage />} />
        <Route path="/retreat" element={<RetreatPage />} />
        <Route path="/summit" element={<SummitPage />} />
        <Route path="/conference" element={<ConferencePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
