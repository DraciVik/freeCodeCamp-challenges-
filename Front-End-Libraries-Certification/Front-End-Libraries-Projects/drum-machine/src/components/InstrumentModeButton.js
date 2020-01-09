import React from "react";

const InstrumentModeButton = ({ modeName, changeMode }) => {
  return (
    <button
      id={modeName.toLowerCase()}
      onClick={() => changeMode(modeName.toLowerCase())}
    >
      {modeName}
    </button>
  );
};

export default InstrumentModeButton;
