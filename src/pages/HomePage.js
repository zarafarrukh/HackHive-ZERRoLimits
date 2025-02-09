import React from "react";
import { Link } from "react-router-dom"; // No need for useNavigate
import "../styles/HomePage.css";
import Footer from "../pages/Footer";
import Logo from "../assets/images/logo.png";
import Accessibility from "../pages/Accessibility";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>

      {/* Logo and Slogan */}
      <header className="homepage-header">
        <img src={Logo} alt="Revivo Logo" className="logo" />
        <p className="slogan">Revive Your Best Self</p>
      </header>

      {/* Main Section */}
      <section className="main-content">
        <p>Find the root cause of your health concerns and get personalized insights.</p>
        <Link to="/body" className="cta-button">Start Your Journey</Link>
        
      </section>

      {/* Accessibility Feature */}
      <Accessibility />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
