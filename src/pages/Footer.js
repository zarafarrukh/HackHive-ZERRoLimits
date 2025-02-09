// Footer component is imported and rendered at the bottom of pages.

import React from "react";
import "../styles/Footer.css"; // Import footer-specific styles

const Footer = () => {
  return (
    <footer className="homepage-footer">
      <p>© 2025 Revivo. All Rights Reserved.</p>
      <p>
        <a href="https://hackhive-otu.devpost.com">DevPost</a> | 
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer"> Discord</a> |
        <a href="https://github.com/zarafarrukh/Revivo"> GitHub</a>
      </p>
    </footer>
  );
};

export default Footer;