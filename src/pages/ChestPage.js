import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ChestPage.css"; // Import CSS

const ChestPage = () => {
    const navigate = useNavigate();

    // Function to go back to BodyPage
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="chest-container">
            {/* Chest Image */}
            <img src="/chest.png" alt="Chest" className="chest-image" />

            {/* Centered Skin Button */}
            <div className="chest-buttons">
                <button className="chest-option-button">Skin</button>
            </div>

            {/* Back Button with Text */}
            <button className="back-button" onClick={handleBackClick}>
                Back
            </button>
        </div>
    );
};

export default ChestPage;
