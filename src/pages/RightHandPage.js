import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RightHandPage.css"; // Import CSS

const RightHandPage = () => {
    const navigate = useNavigate();

    // Function to go back to BodyPage
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="right-hand-container">
            {/* Right Hand Image */}
            <img src="/rightHand.png" alt="Right Hand" className="right-hand-image" />

            {/* Centered Skin Button */}
            <div className="right-hand-buttons">
                <button className="right-hand-option-button">Skin</button>
            </div>

            {/* Back Button with Text */}
            <button className="back-button" onClick={handleBackClick}>
                Back
            </button>
        </div>
    );
};

export default RightHandPage;
