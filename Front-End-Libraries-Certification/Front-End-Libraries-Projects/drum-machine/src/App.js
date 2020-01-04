/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import drumData from "./components/drumData";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click the drum buttons or press keys"
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    // this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.focus();
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === e.currentTarget.datakey) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.handleDisplay(e.currentTarget.id);
    }
  }

  // playSound(e) {
  //   const sound = document.getElementById("");
  // }

  handleClick = e => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.handleDisplay(e.currentTarget.id);
    console.log(e.currentTarget);
  };
  handleDisplay = display => this.setState({ display });
  render() {
    return (
      <div id="drum-machine">
        <div id="drum-pads">
          {drumData.map(value => (
            <div
              className="drum-pad"
              datakey={value.dataKey}
              id={value.name}
              key={value.key}
              onClick={this.handleClick}
            >
              <p>{value.key}</p>
              <audio
                ref={ref => (this.audio = ref)}
                className="clip"
                src={value.src}
                id={value.key}
              ></audio>
            </div>
          ))}
        </div>
        <div id="display">{this.state.display}</div>
      </div>
    );
  }
}

export default App;
