import React from "react";

export default function Display({ display, mode, power }) {
  if (power) {
    return (
      <div id="display" className="piano">
        <h2>{display}</h2>
        <div>
          <p>Power: ON</p>
          <p>Mode: {mode}</p>
        </div>
      </div>
    );
  }
  return <h2>Power: Off</h2>;
}
