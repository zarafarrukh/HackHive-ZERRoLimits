import React from "react";
import "../styles/HomePage.css"; // Import stylesheet
import Footer from "../pages/Footer"; // Import the Footer component
import Logo from "../assets/images/logo.png"; // Import the logo image

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Logo and Slogan */}
      <header className="homepage-header">
      <h1><img src={Logo} alt="Revivo Logo" className="logo" style={{ width: "250px" }} /></h1>
        <p className="slogan">Revive Your Best Self</p>
      </header>

      {/* Main Section */}
      <section className="main-content">
        <p>Find the root cause of your health concerns and get personalized insights.</p>
        <button className="cta-button">Start Your Journey</button>
      </section>

      {/* Footer Section (Imported from Footer.js) */}
      <Footer />
    </div>
  );
};

export default HomePage;