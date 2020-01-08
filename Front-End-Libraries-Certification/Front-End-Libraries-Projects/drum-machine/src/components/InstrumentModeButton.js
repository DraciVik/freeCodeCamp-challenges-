import React from "react";

const InstrumentModeButton = ({ modeName, changeMode }) => {
  return (
    <button onClick={() => changeMode(modeName.toLowerCase())}>
      {modeName}
    </button>
  );
};

export default InstrumentModeButton;
