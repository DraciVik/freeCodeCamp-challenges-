/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import drumData from "./components/drumData";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Joe Mama"
    };
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="drum-pads">
          <div className="drum-pad">
            Q
            <audio src="#" className="clip" id="Q" />
          </div>
          <div className="drum-pad">
            W <audio src="#" className="clip" id="W" />
          </div>
          <div className="drum-pad">
            E <audio src="#" className="clip" id="E" />
          </div>
          <div className="drum-pad">
            A <audio src="#" className="clip" id="A" />
          </div>
          <div className="drum-pad">
            S <audio src="#" className="clip" id="S" />
          </div>
          <div className="drum-pad">
            D <audio src="#" className="clip" id="D" />
          </div>
          <div className="drum-pad">
            Z <audio src="#" className="clip" id="Z" />
          </div>
          <div className="drum-pad">
            X <audio src="#" className="clip" id="X" />
          </div>
          <div className="drum-pad">
            C <audio src="#" className="clip" id="C" />
          </div>
        </div>
        <div id="display">Joe and Mike</div>
      </div>
    );
  }
}

export default App;
