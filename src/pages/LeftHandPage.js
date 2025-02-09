import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LeftHandPage.css"; // Import CSS

const LeftHandPage = () => {
    const navigate = useNavigate();

    // Function to go back to BodyPage
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleSkinClick = () => {
        navigate("/skin-questions");
    };
    
    return (
        <div className="left-hand-container">
            {/* Left Hand Image */}
            <img src="/leftHand.png" alt="Left Hand" className="left-hand-image" />

            {/* Centered Skin Button */}
            <div className="left-hand-buttons">
                <button className="left-hand-option-button" onClick={handleSkinClick}>Skin</button>
            </div>

            {/* Back Button with Text */}
            <button className="back-button" onClick={handleBackClick}>
                Back
            </button>
        </div>
    );
};

export default LeftHandPage;
