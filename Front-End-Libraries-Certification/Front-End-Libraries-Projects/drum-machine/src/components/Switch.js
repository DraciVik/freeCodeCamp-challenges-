/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

const Switch = props => {
  return (
    <div className="power-switch">
      <div className="toggle" onClick={props.switchPower}>
        <div className={props.power ? "toggle-on" : "toggle-off"} />
      </div>
      <div className="ctrl-status">{props.power ? "ON" : "OFF"}</div>
    </div>
  );
};

export default Switch;
