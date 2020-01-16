import React from "react";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      calculation: "",
      operands: [],
      operators: []
    };
  }

  clearAll = () => {
    this.setState({
      result: 0,
      calculation: "",
      operands: [],
      operators: []
    });
  };

  applySign = e => {
    let { calculation, operands, operators } = this.state;
    let signs = "/*-+";
    // Checks if an operator is pressed first before having anything to operate on
    if (
      operands.length === 0 &&
      operators.length === 0 &&
      signs.indexOf(calculation) !== -1
    ) {
      return;
    }

    // If we change the sign
    if (signs.indexOf(calculation) !== -1) {
      this.setState({
        calculation: e.target.innerText
      });
    }

    // If the operands array is not empty and the calculation is a number
    if (
      operands.length === 0 &&
      calculation &&
      signs.indexOf(calculation) === -1
    ) {
      operands.push(calculation);

      this.setState({
        calculation: e.target.innerText
      });
    }
    if (
      operands.length === operators.length &&
      calculation &&
      signs.indexOf(calculation) === -1
    ) {
      operands.push(calculation);
      this.setState({
        calculation: e.target.innerText
      });
    }
  };

  equals = () => {
    const { calculation, operands } = this.state;
    const signs = "/*-+";
    // checks if calculation is not an empty string and it's not an operator
    if (calculation && signs.indexOf(calculation) === -1) {
      operands.push(calculation);
    }
    this.calculate();
  };

  calculate = () => {
    const { operands, operators } = this.state;
    let result = operands[0];
    const math_it_up = {
      "+": function(x, y) {
        return x + y;
      },
      "-": function(x, y) {
        return x - y;
      },
      "*": function(x, y) {
        return x * y;
      },
      "/": function(x, y) {
        return x / y;
      }
    };

    for (let i = 1; i < operators.length; i += 1) {}

    // let newResult = eval(this.state.calculation);
    // this.setState({ result: newResult, calculation: "" });
  };

  addNumberToCalculation = e => {
    let { operands, operators, calculation: myCalculation } = this.state;
    const signs = "/*-+";

    //When the application starts we need to enter operands first on which to operate
    if (operands.length === 0) {
      // When a sign is clicked the operand is pushed into the operands array
      // Makes sure there are no trailing zeroes
      if (myCalculation === "0" && e.target.innerText !== "0") {
        this.setState({
          calculation: e.target.innerText
        });
      }
      // If no operands are pushed yet, the number gets bigger
      if (myCalculation !== "0") {
        this.setState({
          calculation: (myCalculation += e.target.innerText)
        });
      }
    }
    // If operators and operands array length is equal and there is a sign entered - the sign is pushed to operators array
    if (
      operators.length === operands.length &&
      signs.indexOf(myCalculation === -1) &&
      operators.length !== 0
    ) {
      if (myCalculation === "0" && e.target.innerText !== "0") {
        this.setState({
          calculation: e.target.innerText
        });
      }
      // If no operands are pushed yet, the number gets bigger
      if (myCalculation !== "0") {
        this.setState({
          calculation: (myCalculation += e.target.innerText)
        });
      }
    }
    if (
      operators.length < operands.length &&
      signs.indexOf(myCalculation) !== -1
    ) {
      operators.push(myCalculation);
      this.setState({
        calculation: e.target.innerText
      });
    }
  };

  render() {
    return (
      <div id="calculator">
        <div id="display">
          <div id="result">{this.state.result}</div>
          <div id="calculation">
            {this.state.calculation === "" ? "0" : this.state.calculation}
          </div>
        </div>
        <div id="buttons">
          <button id="clear" onClick={this.clearAll}>
            AC
          </button>
          <button id="divide" onClick={this.applySign}>
            /
          </button>
          <button id="multiply" onClick={this.applySign}>
            *
          </button>

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
          <button id="decimal" onClick={this.addNumberToCalculation}>
            .
          </button>

          <button id="subtract" onClick={this.applySign}>
            -
          </button>
          <button id="add" onClick={this.applySign}>
            +
          </button>
          <button id="equals" onClick={this.equals}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
