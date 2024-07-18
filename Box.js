// src/Box.js
import React from 'react';
import './Box.css';

const Box = ({ size, color, label }) => {
  return (
    <div className={`box ${size}`} style={{ backgroundColor: color }}>
      {label}
    </div>
  );
};

export default Box;
