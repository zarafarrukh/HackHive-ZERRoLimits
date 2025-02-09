import React, { useState } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import "../styles/Accessibility.css"; // Import CSS

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false); // State to manage link highlighting
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleAccessibilityBar = () => {
    setIsOpen(!isOpen);
  };

  const handleReadAloud = () => {
    const text = document.body.innerText; // Get the full text of the page

    if (isReading) {
      speechSynthesis.cancel(); // Stop reading if it's already reading
      setIsReading(false);
    } else {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US'; // Set language
      speechSynthesis.speak(speech);
      setIsReading(true);
    }
  };

  const handleHighlightLinks = () => {
    setHighlightLinks(!highlightLinks); // Toggle link highlighting
    if (!highlightLinks) {
      document.body.classList.add('highlight-links'); // Add class to body for highlighting
    } else {
      document.body.classList.remove('highlight-links'); // Remove class when toggled off
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
    if (!darkMode) {
      document.body.classList.add('dark-mode'); // Add class to body for dark mode
    } else {
      document.body.classList.remove('dark-mode'); // Remove class for dark mode
    }
  };

  return (
    <div className="accessibility-container">
      <button className="accessibility-icon" onClick={toggleAccessibilityBar}>
        <FontAwesomeIcon icon={faUniversalAccess} />
      </button>
      {isOpen && (
        <div className="accessibility-bar">
          <button className="button" onClick={handleReadAloud}>
            {isReading ? "Stop Reading" : "Read Aloud"}
          </button>
          <button className="button" onClick={handleHighlightLinks}>
            {highlightLinks ? "Stop Highlighting Links" : "Highlight Links"}
          </button>
          <button className="button" onClick={toggleDarkMode}>
            {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Accessibility;
