import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FacePage.css"; // Import CSS

const FacePage = () => {
    const navigate = useNavigate();

    // Function to go back to BodyPage
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="face-container">
            {/* Face Image Only */}
            <img src="/head.png" alt="Head" className="face-image" />

            {/* Two Buttons in Center */}
            <div className="face-buttons">
                <button className="face-option-button">Skin</button>
                <button className="face-option-button">Hair</button>
            </div>

            {/* Back Button with Text */}
            <button className="back-button" onClick={handleBackClick}>
                Back
            </button>
        </div>
    );
};

export default FacePage;
