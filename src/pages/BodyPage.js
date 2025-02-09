import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BodyPage.css";

const BodyPage = () => {
    const [hoveredPart, setHoveredPart] = useState(null);
    const [blurbPosition, setBlurbPosition] = useState({ top: 0, left: 0 });
    const navigate = useNavigate();

    const handleMouseEnter = (part, event) => {
        const rect = event.target.getBoundingClientRect();
        setHoveredPart(part);
        setBlurbPosition({
            top: rect.top + window.scrollY - 20,
            left: rect.left + window.scrollX + rect.width / 2,
        });
    };

    const handleMouseLeave = () => {
        setHoveredPart(null);
    };

    const handleBodyPartClick = (part) => {
        const routes = {
            "Head": "/face",
            "Chest": "/chest",
            "Stomach": "/stomach",
            "Left Arm": "/left-arm",
            "Right Arm": "/right-arm",
            "Left Hand": "/left-hand",
            "Right Hand": "/right-hand",
            "Left Leg": "/left-leg",
            "Right Leg": "/right-leg"
        };

        navigate(routes[part]); // Navigate to the corresponding page
    };

    return (
        <div className="body-page">
            <h1>Select a Body Part</h1>

            {hoveredPart && (
                <div
                    className="hover-blurb"
                    style={{ top: blurbPosition.top, left: blurbPosition.left }}
                >
                    {hoveredPart}
                </div>
            )}

            <div className="body-image-container">
                <img src="body.jpg" alt="Human Body" className="body-image" />

                {/* Clickable Areas */}
                {Object.keys({
                    "Head": "/face",
                    "Chest": "/chest",
                    "Stomach": "/stomach",
                    "Left Arm": "/left-arm",
                    "Right Arm": "/right-arm",
                    "Left Hand": "/left-hand",
                    "Right Hand": "/right-hand",
                    "Left Leg": "/left-leg",
                    "Right Leg": "/right-leg"
                }).map((part) => (
                    <div
                        key={part}
                        className={`clickable ${part.toLowerCase().replace(" ", "-")}`}
                        onClick={() => handleBodyPartClick(part)}
                        onMouseEnter={(e) => handleMouseEnter(part, e)}
                        onMouseLeave={handleMouseLeave}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BodyPage;
