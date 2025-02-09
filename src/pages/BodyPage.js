import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BodyPage.css";

const BodyPage = () => {
    const [hoveredPart, setHoveredPart] = useState(null);
    const [blurbPosition, setBlurbPosition] = useState({ top: 0, left: 0 });
    const [isZooming, setIsZooming] = useState(false); // State to trigger zoom effect
    const [isHeadZooming, setIsHeadZooming] = useState(false); // State for head zoom
    const [isChestZooming, setIsChestZooming] = useState(false); // State for chest zoom
    const [isStomachZooming, setIsStomachZooming] = useState(false); // State for stomach zoom
    const [isLeftArmZooming, setIsLeftArmZooming] = useState(false); // State for left arm zoom
    const [isRightArmZooming, setIsRightArmZooming] = useState(false); // State for right arm zoom
    const [isLeftHandZooming, setIsLeftHandZooming] = useState(false); // State for left hand zoom
    const [isRightHandZooming, setIsRightHandZooming] = useState(false); // State for right hand zoom
    const [isLeftLegZooming, setIsLeftLegZooming] = useState(false); // State for left leg zoom
    const [isRightLegZooming, setIsRightLegZooming] = useState(false); // State for right leg zoom
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
        if (part === "Head") {
            // Trigger head zoom-in effect
            setIsHeadZooming(true);
            setTimeout(() => {
                navigate("/face"); // Navigate to the FacePage after animation
            }, 1000); // Delay to match the animation duration
        } else if (part === "Chest") {
            // Trigger chest zoom-in effect
            setIsChestZooming(true);
            setTimeout(() => {
                navigate("/chest"); // Navigate to the ChestPage after animation
            }, 1000); // Delay to match the animation duration
        } else if (part === "Stomach") {
            // Trigger stomach zoom-in effect
            setIsStomachZooming(true);
            setTimeout(() => {
                navigate("/stomach"); // Navigate to the StomachPage after animation
            }, 1000); // Delay to match the animation duration
        } else if (part === "Left Arm") {
            // Trigger left arm zoom-in effect
            setIsLeftArmZooming(true);
            setTimeout(() => {
                navigate("/left-arm"); // Navigate to the Left Arm Page after animation
            }, 1000); // Delay to match the animation duration
        } else if (part === "Right Arm") {
            setIsRightArmZooming(true);
            setTimeout(() => {
                navigate("/right-arm"); // Navigate to the Right Arm page after zoom
            }, 1000); // Delay to match animation duration
        } else if (part === "Left Hand") {
            setIsLeftHandZooming(true);
            setTimeout(() => {
                navigate("/left-hand"); // Navigate to the Left Hand page after zoom
            }, 1000); // Delay to match animation duration
        } else if (part === "Right Hand") {
            setIsRightHandZooming(true);
            setTimeout(() => {
                navigate("/right-hand"); // Navigate to the Right Hand page after zoom
            }, 1000); // Delay to match animation duration
        } else if (part === "Left Leg") {
            setIsLeftLegZooming(true);
            setTimeout(() => {
                navigate("/left-leg"); // Navigate to the Left Leg page after zoom
            }, 1000); // Delay to match animation duration
        } else if (part === "Right Leg") {
            setIsRightLegZooming(true);
            setTimeout(() => {
                navigate("/right-leg"); // Navigate to the Right Leg page after zoom
            }, 1000); // Delay to match animation duration
        } else {
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
        }
    };

    const handleBackClick = () => {
        navigate("/"); // Navigate to the home page
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

            {/* Back Button */}
            <button className="back-button" onClick={handleBackClick}>
                Back to Home
            </button>

            <div className="body-image-container">
                <img
                    src="bodyColored.png"
                    alt="Human Body"
                    className={`body-image ${isHeadZooming ? "zoom-in-head" : ""}
                ${isChestZooming ? "zoom-in-chest" : ""}
                ${isStomachZooming ? "zoom-in-stomach" : ""}
                ${isLeftArmZooming ? "zoom-in-left-arm" : ""}
                ${isRightArmZooming ? "zoom-in-right-arm" : ""}
                ${isLeftHandZooming ? "zoom-in-left-hand" : ""}
                ${isRightHandZooming ? "zoom-in-right-hand" : ""}
                ${isLeftLegZooming ? "zoom-in-left-leg" : ""}
                ${isRightLegZooming ? "zoom-in-right-leg" : ""}`}
                />

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
