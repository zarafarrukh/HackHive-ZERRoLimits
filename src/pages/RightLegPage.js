import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RightLegPage.css"; // Import CSS

const RightLegPage = () => {
    const navigate = useNavigate();

    // Function to go back to BodyPage
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="right-leg-container">
            {/* Right Leg Image */}
            <img src="/rightLeg.png" alt="Right Leg" className="right-leg-image" />

            {/* Centered Skin Button */}
            <div className="right-leg-buttons">
                <button className="right-leg-option-button">Skin</button>
            </div>

            {/* Back Button with Text */}
            <button className="back-button" onClick={handleBackClick}>
                Back
            </button>
        </div>
    );
};

export default RightLegPage;
