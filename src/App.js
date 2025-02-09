import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodyPage from "./pages/BodyPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FacePage from "./pages/FacePage";

// Import individual body part pages (placed directly in the `pages` folder)
import ChestPage from "./pages/ChestPage";
import StomachPage from "./pages/StomachPage";
import LeftArmPage from "./pages/LeftArmPage";
import RightArmPage from "./pages/RightArmPage";
import LeftHandPage from "./pages/LeftHandPage";
import RightHandPage from "./pages/RightHandPage";
import LeftLegPage from "./pages/LeftLegPage";
import RightLegPage from "./pages/RightLegPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Route for FacePage */}
        <Route path="/face" element={<FacePage />} />

        {/* Route for AboutPage */}
        <Route path="/about" element={<AboutPage />} />

        {/* Routes for each body part */}
        <Route path="/face" element={<FacePage />} />
        <Route path="/chest" element={<ChestPage />} />
        <Route path="/stomach" element={<StomachPage />} />
        <Route path="/left-arm" element={<LeftArmPage />} />
        <Route path="/right-arm" element={<RightArmPage />} />
        <Route path="/left-hand" element={<LeftHandPage />} />
        <Route path="/right-hand" element={<RightHandPage />} />
        <Route path="/left-leg" element={<LeftLegPage />} />
        <Route path="/right-leg" element={<RightLegPage />} />

        {/* Fallback route */}
        <Route path="*" element={<BodyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
