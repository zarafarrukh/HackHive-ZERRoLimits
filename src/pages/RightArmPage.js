import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RightArmPage.css"; // Import CSS

const RightArmPage = () => {
    const navigate = useNavigate();

    // Function to go back to BodyPage
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="right-arm-container">
            {/* Right Arm Image */}
            <img src="/rightArm.png" alt="Right Arm" className="right-arm-image" />

            {/* Centered Skin Button */}
            <div className="right-arm-buttons">
                <button className="right-arm-option-button">Skin</button>
            </div>

            {/* Back Button with Text */}
            <button className="back-button" onClick={handleBackClick}>
                Back
            </button>
        </div>
    );
};

export default RightArmPage;
