import React from "react";
import "./icon.css";

const Icon = ({ icon, label }) => {
  return (
    <div>
      <div className="icon-container">{icon}</div>
      <p>{label}</p>
    </div>
  );
};

export default Icon;
