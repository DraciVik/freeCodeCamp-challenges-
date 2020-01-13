/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import Pad from "./components/Pad";
import drumData from "./drumData";
import Display from "./components/Display";
import Switch from "./components/Switch";
import InstrumentModeButton from "./components/InstrumentModeButton";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: "Lets rock!",
      mode: "drums",
      power: true
    };
  }

  componentDidMount() {
    const {mode} =   this.state;
    let modeButton = document.getElementById(mode);
    modeButton.classList.add(mode);
    const keys = Array.from(document.querySelectorAll(".drum-pad"));
    keys.forEach(key =>
      key.addEventListener("transitionend", this.removeTransition)
    );
  }

  componentWillUnmount() {
    const keys = Array.from(document.querySelectorAll(".drum-pad"));
    keys.forEach(key =>
      key.addEventListener("transitionend", this.removeTransition)
    );
  }
  
  display = value => {
    this.setState({ displayMessage: value });
  };

  removeTransition = (e) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  changeInstrumentMode = (val) => {
    const {mode} = this.state;
    let currentButton = document.getElementById(mode);
    let nextButton = document.getElementById(val);

    this.setState(prevState => ({ mode: val }));
    this.changeButtonColor(currentButton, nextButton, val);
  }

  changeButtonColor =(currentButton, nextButton, val) => {
    const {mode} = this.state;
    if (currentButton === nextButton) {
      return;
    } else {
      currentButton.classList.remove(mode);
      nextButton.classList.add(val);
    }
  }

  switchPower = () => {
    const {power} = this.state;
    this.setState({ power: !power });
  };

  render() {
    const modes = ["drums", "piano", "animals"];
    const {power, displayMessage, mode} = this.state;
    return (
      <>
        <h1>Drum Machine</h1>
        <div id="drum-machine">
          <Display
            power={power}
            display={displayMessage}
            mode={mode}
          />
          <div>
            <Switch power={power} switchPower={this.switchPower} />
          </div>
          <div id="drum-pads">
            {drumData.map(keyboardKey => {
              return (
                <Pad
                  power={power}
                  display={this.display}
                  key={keyboardKey.letter}
                  keyValue={keyboardKey}
                  mode={mode}
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
                    power={power}
                    currentMode={mode}
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
