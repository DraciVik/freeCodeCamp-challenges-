/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

export default class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyValue.keyCode) this.playSound();
  }

  playSound = e => {
    const { keyValue, volume, display, mode } = this.props;
    let selectedSound = document.getElementById(keyValue["letter"]);
    let selectedButton = document.getElementById(
      keyValue["letter"] + "-button"
    );
    selectedSound.currentTime = 0;
    selectedSound.onvolumechange = parseInt(volume) / 100;
    selectedSound.play();
    display(keyValue[mode].title);
  };

  //TODO: Power activation
  render() {
    const { keyValue, mode } = this.props;
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
          preload
        />
      </button>
    );
  }
}
