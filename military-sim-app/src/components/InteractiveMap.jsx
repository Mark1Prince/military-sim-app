import React, { useState } from 'react';
import './InteractiveMap.css';

const InteractiveMap = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const moveUnit = () => {
    const randomX = Math.floor(Math.random() * 300);
    const randomY = Math.floor(Math.random() * 300);
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="map-container">
      <svg width="400" height="400" className="map-svg">
        <rect width="100%" height="100%" fill="#eef2f3" />
        <circle
          cx={position.x}
          cy={position.y}
          r="10"
          fill="#4caf50"
          stroke="#2e7d32"
          strokeWidth="2"
        />
      </svg>
      <button onClick={moveUnit}>Переместить юнита</button>
    </div>
  );
};

export default InteractiveMap;
