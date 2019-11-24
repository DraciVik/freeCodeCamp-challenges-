import React from "react";
import placeholder from "./components/placeholder";
import MarkdownRender from "./components/MarkdownRender";
import MarkdownEditor from "./components/MarkdownEditor";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
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
        <MarkdownRender text={value} />
      </div>
    );
  }
}
