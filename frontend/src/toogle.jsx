import React, { useState, useRef } from "react";

const ToggleBar = () => {
  const [togglePosition, setTogglePosition] = useState(0);
  const toggleBarRef = useRef(null);

  const handleToggle = (event) => {
    const barRect = toggleBarRef.current.getBoundingClientRect();
    const clickX = event.clientX - barRect.left;

    const newPosition = Math.min(
      Math.max(0, clickX),
      barRect.width - 60 // Adjust based on the slider width
    );

    setTogglePosition(newPosition);
  };

  const styles = `
    .toggle-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .toggle-bar {
      width: 200px;
      height: 60px;
      border: 2px solid #ccc;
      border-radius: 60px;
      background-color: #eee;
      cursor: pointer;
      position: relative;
    }

    .slider {
      width: 60px;
      height: 60px;
      background-color: #007bff;
      transition: transform 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      position: absolute;
    }
  `;

  const sliderStyle = {
    transform: `translateX(${togglePosition}px)`,
  };

  return (
    <div className="toggle-container">
      <style>{styles}</style>
      <div
        className="toggle-bar"
        ref={toggleBarRef}
        onClick={handleToggle}
      >
        <div className="slider" style={sliderStyle}>
          {togglePosition < 60
            ? "Left"
            : togglePosition < 120
            ? "Middle"
            : "Right"}
        </div>
      </div>
    </div>
  );
};

export default ToggleBar;
