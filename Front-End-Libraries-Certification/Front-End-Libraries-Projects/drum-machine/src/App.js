import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main id="drum-machine">
        <div id="drum-buttons">
          <button className="drum-pad">Q</button>
          <button className="drum-pad">W</button>
          <button className="drum-pad">E</button>
          <button className="drum-pad">A</button>
          <button className="drum-pad">S</button>
          <button className="drum-pad">D</button>
          <button className="drum-pad">Z</button>
          <button className="drum-pad">X</button>
          <button className="drum-pad">C</button>
        </div>
        <div id="display-container">
          <p id="display">BullShit</p>
        </div>
      </main>
    </div>
  );
}

export default App;
