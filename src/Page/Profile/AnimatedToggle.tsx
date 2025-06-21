import React, { useState } from "react";

const AnimatedToggle: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <svg
      className="toggle-svg"
      width="64"
      height="32"
      viewBox="0 0 64 32"
      onClick={() => setIsOn(!isOn)}
      style={{ cursor: "pointer" }}
    >
      <defs>
        <linearGradient id="thumbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="19%" stopColor="#FC52FA" />
          <stop offset="30%" stopColor="#3B2C9F" />
          <stop offset="93%" stopColor="#5163B3" />
        </linearGradient>
      </defs>

      <rect
        y="0.5"
        width="64"
        height="31"
        rx="15.5"
        fill={isOn ? "#8966DE" : "#ccc"}
      />

      <rect
        x={2.5469}
        y={2.5}
        width="28"
        height="28"
        rx="13.6562"
        fill="url(#thumbGradient)"
        stroke="#132555"
        strokeWidth="2.375"
        style={{
          transform: `translateX(${isOn ? 31 : 0}px)`,
          transition: "transform 0.3s ease",
        }}
      />
    </svg>
  );
};

export default AnimatedToggle;
