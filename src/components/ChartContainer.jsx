import React from 'react';

export default function ChartContainer({ title, description, children }) {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="chart-body">
        {children}
      </div>
    </div>
  );
}
