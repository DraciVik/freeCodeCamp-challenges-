import React from "react";

export default function Display({ display, mode, power }) {
  if (power) {
    return (
      <div id="display" className={mode}>
        <h2>{display}</h2>
        <div>
          <p>Power: ON</p>
          <p>Mode: {mode}</p>
        </div>
      </div>
    );
  }
  return (
    <div id="display" className="power-off">
      <h2>Power: Off</h2>
    </div>
  );
}
