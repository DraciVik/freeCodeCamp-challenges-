/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import Pad from "./components/Pad";
import drumData from "./drumData";
import Display from "./components/Display";
import Switch from "./components/Switches";
import VolumeSlider from "./components/VolumeSlider";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: "Lets rock!",
      mode: "drums",
      volume: "50",
      power: true
    };
  }

  display = value => {
    this.setState({ displayMessage: value });
  };
  render() {
    return (
      <>
        <h1>Drum Machine</h1>
        <div id="drum-machine">
          <Display
            power={this.state.power}
            display={this.state.displayMessage}
            mode={this.state.mode}
          />
          <div>
            <Switch />
            <VolumeSlider />
            <hr />
          </div>
          <div id="drum-pads">
            {drumData.map(keyboardKey => {
              return (
                <Pad
                  power={this.state.power}
                  display={this.display}
                  key={keyboardKey.letter}
                  keyValue={keyboardKey}
                  mode={this.state.mode}
                  volume={this.state.volume}
                />
              );
            })}
          </div>
          <div>drum sets</div>
        </div>
      </>
    );
  }
}

export default App;
