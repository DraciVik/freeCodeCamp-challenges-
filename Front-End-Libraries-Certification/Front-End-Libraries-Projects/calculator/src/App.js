import React from "react";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      calculation: "0"
    };
  }

  calculate = () => {
    let newResult = eval(this.state.calculation);
    this.setState({ result: newResult, calculation: "0" });
  };

  addNumberToCalculation = e => {
    console.log(e.target.innerText);
  };

  render() {
    return (
      <div id="calculator">
        <div id="display">
          <div id="result">{this.state.result}</div>
          <div id="calculation">{this.state.calculation}</div>
        </div>
        <div id="buttons">
          <button id="clear">AC</button>
          <button id="divide">/</button>
          <button id="multiply">*</button>

          <button id="seven" onClick={this.addNumberToCalculation}>
            7
          </button>
          <button id="eight" onClick={this.addNumberToCalculation}>
            8
          </button>
          <button id="nine" onClick={this.addNumberToCalculation}>
            9
          </button>
          <button id="four" onClick={this.addNumberToCalculation}>
            4
          </button>
          <button id="five" onClick={this.addNumberToCalculation}>
            5
          </button>
          <button id="six" onClick={this.addNumberToCalculation}>
            6
          </button>
          <button id="one" onClick={this.addNumberToCalculation}>
            1
          </button>
          <button id="two" onClick={this.addNumberToCalculation}>
            2
          </button>
          <button id="three" onClick={this.addNumberToCalculation}>
            3
          </button>
          <button id="zero" onClick={this.addNumberToCalculation}>
            0
          </button>
          <button id="decimal">.</button>

          <button id="subtrac">-</button>
          <button id="add">+</button>
          <button id="equals" onClick={this.calculate}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
