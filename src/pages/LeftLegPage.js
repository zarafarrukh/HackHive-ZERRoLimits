import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LeftLegPage.css"; // Import CSS

const LeftLegPage = () => {
    const navigate = useNavigate();

    // Function to go back to BodyPage
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleSkinClick = () => {
        navigate("/skin-questions");
    };

    return (
        <div className="left-leg-container">
            {/* Left Leg Image */}
            <img src="/leftLeg.png" alt="Left Leg" className="left-leg-image" />

            {/* Centered Skin Button */}
            <div className="left-leg-buttons">
                <button className="left-leg-option-button" onClick={handleSkinClick}>Skin</button>
            </div>

            {/* Back Button with Text */}
            <button className="back-button" onClick={handleBackClick}>
                Back
            </button>
        </div>
    );
};

export default LeftLegPage;
