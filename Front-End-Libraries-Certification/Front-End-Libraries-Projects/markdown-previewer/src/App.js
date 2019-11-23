import React from "react";
import marked from "marked";
import MarkdownElement from "./components/MarkdownElement";
import placeholder from "./components/placeholder";
import MarkdownEditor from "./components/MarkdownEditor";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);

    // Allows return button to render line breaks
    marked.setOptions({
      breaks: true
    });
  }

  componentDidMount() {
    this.setState({
      value: placeholder
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { handleChange } = this;
    const { value } = this.state;
    return (
      <div className="App">
        <MarkdownEditor onChange={handleChange} text={value} />
        <MarkdownElement text={value} />
      </div>
    );
  }
}

export default App;
