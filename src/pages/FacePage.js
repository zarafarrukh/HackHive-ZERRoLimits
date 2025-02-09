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
            <h1>Face Page</h1>
            <p>Information about the face.</p>

            {/* Using image from /public folder */}
            <img src="/head.png" alt="Head" />

            <button className="back-button" onClick={handleBackClick}>
                Back to Body Selection
            </button>
        </div>
    );
};

export default FacePage;
