import React, { useState } from "react";
import "../styles/BodyPage.css"; 

const BodyPage = () => {
    const [hoveredPart, setHoveredPart] = useState(null); // State to track hovered part
    const [blurbPosition, setBlurbPosition] = useState({ top: 0, left: 0 }); // State for text position

    const handleMouseEnter = (part, event) => {
        const rect = event.target.getBoundingClientRect();
        setHoveredPart(part); // Set the part being hovered
        setBlurbPosition({
            top: rect.top + window.scrollY - 20,
            left: rect.left + window.scrollX + rect.width / 2,
        });
    };

    const handleMouseLeave = () => {
        setHoveredPart(null); // Reset when not hovering
    };

    const handleBodyPartClick = (part) => {
        alert(`You clicked on the ${part}`); // Action when a part is clicked
    };

    return (
        <div className="body-page">
            <h1>Select a Body Part</h1>

            {/*Text for highlighted part*/}
            {hoveredPart && (
                <div
                    className="hover-blurb"
                    style={{ top: blurbPosition.top, left: blurbPosition.left }}
                >
                    {hoveredPart}
                </div>
            )}

            {/* Image */}
            <div className="body-image-container">
                <img
                    src="body.jpg"
                    alt="Human Body"
                    className="body-image"
                />

                {/* Clickable Areas */}
                <div
                    className="clickable head"
                    onClick={() => handleBodyPartClick("Head")}
                    onMouseEnter={(e) => handleMouseEnter("Head", e)}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div
                    className="clickable chest"
                    onClick={() => handleBodyPartClick("Chest")}
                    onMouseEnter={(e) => handleMouseEnter("Chest", e)}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div
                    className="clickable stomach"
                    onClick={() => handleBodyPartClick("Stomach")}
                    onMouseEnter={(e) => handleMouseEnter("Stomach", e)}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div
                    className="clickable left-arm"
                    onClick={() => handleBodyPartClick("Left Arm")}
                    onMouseEnter={(e) => handleMouseEnter("Left Arm", e)}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div
                    className="clickable right-arm"
                    onClick={() => handleBodyPartClick("Right Arm")}
                    onMouseEnter={(e) => handleMouseEnter("Right Arm", e)}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div
                    className="clickable legs"
                    onClick={() => handleBodyPartClick("Legs")}
                    onMouseEnter={(e) => handleMouseEnter("Legs", e)}
                    onMouseLeave={handleMouseLeave}
                ></div>
            </div>
        </div>
    );
};

export default BodyPage;
