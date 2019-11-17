/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { FaTwitterSquare } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <main id="quote-box">
        <blockquote id="text">
          <span id="quotation-mark">&rdquo;</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <span id="quotation-mark">&rdquo;</span>
        </blockquote>
        <p id="author">
          <span class="letter-spacing">&mdash;&mdash;&mdash;&mdash;</span>Yo
          mamas ass
        </p>
        <button id="new-quote">New Quote</button>
        <a class="button" id="tweet-quote" title="Tweet this!" target="_blank">
          <FaTwitterSquare />
        </a>
      </main>
    </div>
  );
}

export default App;
