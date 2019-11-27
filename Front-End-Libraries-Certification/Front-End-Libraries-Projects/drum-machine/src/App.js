import React from "react";
import drumData from "./components/drumData";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    console.log(event);
    if (!audio) return;
    // key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();

    this.setState({
      display: "ok"
    });
  }

  handleKeyPress(event) {
    console.log(event); //TODOODODODODOODOD
  }

  render() {
    const drums = drumData.map(drum => {
      return (
        <div
          key={drum.key}
          role="button"
          tabIndex="0"
          data-key={drum.dataKey}
          className="drum-pad"
          onClick={() => this.playSound}
        >
          {drum.key}
          {/*eslint-disable-next-line jsx-a11y/media-has-caption*/}
          <audio
            data-key={drum.dataKey}
            src={drum.src}
            type="audio/mp3"
          ></audio>
        </div>
      );
    });

    const { display } = this.state;

    return (
      <div className="App">
        <main id="drum-machine">
          <div id="drum-buttons">{drums}</div>
          <div id="display-container">
            <p id="display">{display}</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
