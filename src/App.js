import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodyPage from "./pages/BodyPage"; // Ensure correct path to BodyPage
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />
        
        <Route path="*" element={<BodyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
