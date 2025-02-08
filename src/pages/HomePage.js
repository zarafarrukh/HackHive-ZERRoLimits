import React from "react";
import "../styles/HomePage.css"; // Import stylesheet

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Logo and Slogan */}
      <header className="homepage-header">
        <img src="/logo.png" alt="Revivo Logo" className="logo" />
        <h1>Revivo</h1>
        <p className="slogan">slogan here</p>
      </header>
    </div>
  );
};

export default HomePage;