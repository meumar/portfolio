import React from "react";

export default function CircleWithCollar({
  color,
  size,
}: {
  color: string;
  size: number;
}) {
  return (
    <div className="circle-container">
      <svg height={size} width={size}>
        <circle cx={size / 2} cy={size / 2} fill={color} r={size / 2 - 5} />
      </svg>
    </div>
  );
}
