import React from "react";

const CircleBorder = ({ total = 200, sold = 53, size = 200, strokeWidth = 25 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const soldPercentage = sold / total;
  const offset = circumference * (1 - soldPercentage);

  return (
    <svg width={size} height={size}>
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#eee"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Foreground border showing percentage */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#FF6384"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // start from top
      />
      {/* Text in the center */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
      >
        {`${(soldPercentage * 100).toFixed(1)}%`}
      </text>
    </svg>
  );
};

export default CircleBorder;
