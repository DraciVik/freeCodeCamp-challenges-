/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import Pad from "./components/Pad";
import drumData from "./drumData";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: "Lets rock!",
      mode: "piano",
      volume: "50",
      power: true
    };
  }

  display = value => {
    this.setState({ displayMessage: value });
  };
  render() {
    return (
      <div id="drum-machine">
        <div id="drum-pads">
          {drumData.map(keyboardKey => {
            return (
              <Pad
                display={this.display}
                key={keyboardKey.letter}
                keyValue={keyboardKey}
                mode={this.state.mode}
                volume={this.state.volume}
              />
            );
          })}
        </div>
        <div id="display">{this.state.displayMessage}</div>
      </div>
    );
  }
}

export default App;
