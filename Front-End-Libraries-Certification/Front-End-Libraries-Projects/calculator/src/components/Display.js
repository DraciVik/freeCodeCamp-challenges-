import React from "react";

const Display = ({ result, calculation }) => {
  return (
    <div id="display">
      <div id="result">{result === "" ? "0" : result}</div>
      <div id="calculation">{calculation === "" ? "0" : calculation}</div>
    </div>
  );
};

export default Display;
