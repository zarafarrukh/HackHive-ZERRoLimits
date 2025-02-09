import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodyPage from "./pages/BodyPage"; // Ensure correct path to BodyPage
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />
        
        <Route path="*" element={<BodyPage />} />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
