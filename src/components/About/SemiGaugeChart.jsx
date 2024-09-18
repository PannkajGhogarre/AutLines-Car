import React, { useEffect, useState } from 'react';

const SemiGaugeChart = ({ percentage, color,name }) => {
  const [offset, setOffset] = useState(0);

  const size = 250;
  const strokeWidth = 40;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI;

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, percentage, circumference]);

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={size / 2}
        viewBox={`0 0 ${size} ${size / 2}`}
        className="overflow-visible"
      >
        <path
          d={`
            M ${strokeWidth / 2},${size / 2}
            A ${radius},${radius} 0 0 1 ${size - strokeWidth / 2},${size / 2}
          `}
          fill="none"
          stroke="#333"
          strokeWidth={strokeWidth}
        />
        <path
          d={`
            M ${strokeWidth / 2},${size / 2}
            A ${radius},${radius} 0 0 1 ${size - strokeWidth / 2},${size / 2}
          `}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="text-2xl text-white mt-2">{percentage}%</span>
    </div>
  );
};

export default SemiGaugeChart;
