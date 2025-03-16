import React from "react";
import "./link.css";

const Link = ({ svg, label }) => {
  return (
    <div className="link-container">
      {svg}
      <p>{label}</p>
    </div>
  );
};

export default Link;
