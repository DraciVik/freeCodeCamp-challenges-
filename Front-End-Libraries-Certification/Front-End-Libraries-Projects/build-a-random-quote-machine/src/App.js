/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Character from "./components/Character";
import Image from "./components/Image";
import Quote from "./components/Quote";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      quote: "",
      image: "",
      character: ""
    };
    this.renderNewQuote = this.renderNewQuote.bind(this);
  }

  async componentDidMount() {
    const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10";
    const response = await fetch(url);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * 10);
    this.setState({
      data,
      quote: data[randomIndex].quote,
      image: data[randomIndex].image,
      character: data[randomIndex].character
    });
  }

  renderNewQuote() {
    const { data } = this.state;
    const randomIndex = Math.floor(Math.random() * 10);
    this.setState({
      quote: data[randomIndex].quote,
      image: data[randomIndex].image,
      character: data[randomIndex].character
    });
  }

  render() {
    let { quote, image, character } = this.state;
    return (
      <div className="App">
        <main id="quote-box">
          <h1>The Simpsons quotes</h1>
          <div className="quote-and-pic">
            <Quote quote={quote} />
            <Image image={image} character={character} />
          </div>
          <Character character={character} />
          <div>
            <button id="new-quote" onClick={this.renderNewQuote}>
              New Quote
            </button>
          </div>
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this!"
            target="_blank"
          ></a>
        </main>
      </div>
    );
  }
}

export default App;
