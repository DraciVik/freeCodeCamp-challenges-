import React from "react";
import placeholder from "./components/placeholder";
import marked from "marked";
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
    const { value } = this.state;
    const html = marked(value || "");
    return (
      <div className="App">
        <label for="editor">
          Editor
          <textarea
            value={this.state.value}
            id="editor"
            name="editor"
            onChange={this.handleChange}
          ></textarea>
        </label>
        <div>
          <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    );
  }
}

export default App;
