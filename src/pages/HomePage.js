import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"; // Import stylesheet
import Footer from "../pages/Footer"; // Import the Footer component

const HomePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = () => {
    navigate("/body"); // Navigate to BodyPage
  };

  return (
    <div className="homepage">
      {/* Logo and Slogan */}
      <header className="homepage-header">
        <img src="/logo.png" alt="Revivo Logo" className="logo" />
        <h1>Revivo</h1>
        <p className="slogan">Revive Your Best Self</p>
      </header>

      {/* Main Section */}
      <section className="main-content">
        <h2>Welcome to Revivo</h2>
        <p>Find the root cause of your health concerns and get personalized insights.</p>
        <button className="cta-button" onClick={handleButtonClick}>
          Start Your Journey
        </button>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
