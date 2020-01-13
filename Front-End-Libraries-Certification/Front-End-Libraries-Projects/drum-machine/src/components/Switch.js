
import React from "react";

const Switch = ({switchPower, power}) => {
  return (
    <div className="power-switch">
      <div className="toggle" onClick={switchPower}>
        <div className={power ? "toggle-on" : "toggle-off"} />
      </div>
      <div className="ctrl-status">{power ? "ON" : "OFF"}</div>
    </div>
  );
};

export default Switch;
