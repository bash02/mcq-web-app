import React from "react";
import "./input.css";

const Input = ({ width, label }) => {
  return (
    <div style={{ width: width }} className="input-container">
      <label>{label}</label>
      <input className="input" />
    </div>
  );
};

export default Input;
