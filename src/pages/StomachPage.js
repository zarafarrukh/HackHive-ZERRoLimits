import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StomachPage.css"; // Import CSS

const StomachPage = () => {
    const navigate = useNavigate();

    // Function to go back to BodyPage
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="stomach-container">
            {/* Stomach Image */}
            <img src="/stomach.png" alt="Stomach" className="stomach-image" />

            {/* Centered Skin Button */}
            <div className="stomach-buttons">
                <button className="stomach-option-button">Skin</button>
            </div>

            {/* Back Button with Text */}
            <button className="back-button" onClick={handleBackClick}>
                Back
            </button>
        </div>
    );
};

export default StomachPage;
