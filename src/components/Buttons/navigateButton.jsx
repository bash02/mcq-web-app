import React, { useState } from "react";
import "./button.css";

const NavigateButton = ({ rightLabel, leftLabel, handleScreenChange }) => {
  return (
    <div className="navigate-button">
      <div onClick={handleScreenChange} className="right-navigate">
        <p>{rightLabel}</p>
      </div>
      <div onClick={handleScreenChange} className="left-navigate">
        <p>{leftLabel}</p>
      </div>
    </div>
  );
};

export default NavigateButton;
