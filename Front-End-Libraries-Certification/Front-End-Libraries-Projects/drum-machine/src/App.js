/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import Pad from "./components/Pad";
import drumData from "./drumData";
import Display from "./components/Display";
import Switch from "./components/Switches";
import VolumeSlider from "./components/VolumeSlider";
import InstrumentModeButton from "./components/InstrumentModeButton";
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
    this.changeInstrumentMode = this.changeInstrumentMode.bind(this);
    this.changeButtonColor = this.changeButtonColor.bind(this);
  }

  componentDidMount() {
    let modeButton = document.getElementById(this.state.mode);
    modeButton.classList.add(this.state.mode);
  }
  display = value => {
    this.setState({ displayMessage: value });
  };

  changeInstrumentMode(val) {
    let currentButton = document.getElementById(this.state.mode);
    let nextButton = document.getElementById(val);

    this.setState(prevState => ({ mode: val }));
    this.changeButtonColor(currentButton, nextButton, val);
  }

  changeButtonColor(currentButton, nextButton, val) {
    if (currentButton === nextButton) {
      return;
    } else {
      currentButton.classList.remove(this.state.mode);
      nextButton.classList.add(val);
    }
  }

  render() {
    const modes = ["drums", "piano", "animals"];
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
            <div id="controls">
              <Switch />
              <VolumeSlider />
            </div>
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
          <div>
            <hr />
            <div id="mode-buttons">
              {modes.map(aMode => {
                return (
                  <InstrumentModeButton
                    power={this.state.power}
                    currentMode={this.state.mode}
                    modeName={aMode}
                    changeMode={this.changeInstrumentMode}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
