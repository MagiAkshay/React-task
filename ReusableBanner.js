// src/ReusableBanner.js
import React from 'react';
import './ReusableBanner.css';

const ReusableBanner = ({ title, subtitle, buttonText, backgroundImage }) => {
  return (
    <div className="reusable-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default ReusableBanner;
