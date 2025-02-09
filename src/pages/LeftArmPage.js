import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LeftArmPage.css"; // Import CSS

const LeftArmPage = () => {
    const navigate = useNavigate();

    // Function to go back to BodyPage
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleSkinClick = () => {
        navigate("/skin-questions");
    };

    return (
        <div className="left-arm-container">
            {/* Left Arm Image */}
            <img src="/leftArm.png" alt="Left Arm" className="left-arm-image" />

            {/* Centered Skin Button */}
            <div className="left-arm-buttons">
                <button className="left-arm-option-button" onClick={handleSkinClick}>
                    Skin</button>
            </div>

            {/* Back Button with Text */}
            <button className="back-button" onClick={handleBackClick}>
                Back
            </button>
        </div>
    );
};

export default LeftArmPage;
