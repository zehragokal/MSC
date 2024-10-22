import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import WhoWeArePage from "./components/page/WhoWeArePage";
import OurCommunityPage from "./components/page/OurCommunityPage";
import RetreatPage from "./components/page/RetreatPage";
import SummitPage from "./components/page/SummitPage";
import ConferencePage from "./components/page/ConferencePage";
import ShopPage from "./components/page/ShopPage";
import NotFoundPage from "./components/page/NotFoundPage";
import CouncilGatheringsPage from "./components/page/CouncilGatheringsPage";
import OtherEventsPage from "./components/page/OtherEventsPage";
import RegionalTrainingDaysPage from "./components/page/RegionalTrainingDaysPage";
import ResourceSupportPage from "./components/page/ResourceSupportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/our-community" element={<OurCommunityPage />} />
        <Route path="/retreat" element={<RetreatPage />} />
        <Route path="/summit" element={<SummitPage />} />
        <Route path="/conference" element={<ConferencePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/council-gatherings" element={<CouncilGatheringsPage />} />
        <Route path="/other-events" element={<OtherEventsPage />} />
        <Route
          path="/regional-training-days"
          element={<RegionalTrainingDaysPage />}
        />
        <Route path="/resource-support" element={<ResourceSupportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
