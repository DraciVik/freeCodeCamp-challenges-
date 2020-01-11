/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

export default class Pad extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === this.props.keyValue.keyCode && this.props.power)
      this.playSound();
  };

  playSound = () => {
    const { keyValue, display, mode } = this.props;
    let selectedSound = document.getElementById(keyValue["letter"]);
    let selectedButton = document.getElementById(
      keyValue["letter"] + "-button"
    );
    selectedButton.classList.add("playing");
    selectedSound.currentTime = 0;
    selectedSound.play();
    display(keyValue[mode].title);
  };

  render() {
    const { keyValue, mode, power } = this.props;
    // Power - on
    if (power) {
      return (
        <button
          className="drum-pad"
          id={keyValue["letter"] + "-button"}
          onClick={this.playSound}
        >
          {keyValue["letter"]}
          <audio
            className="clip"
            src={keyValue[mode].soundUrl}
            id={keyValue["letter"]}
          />
        </button>
      );
    }
    // Power - off
    return (
      <button id={keyValue["letter"] + "-button"}>{keyValue["letter"]}</button>
    );
  }
}
