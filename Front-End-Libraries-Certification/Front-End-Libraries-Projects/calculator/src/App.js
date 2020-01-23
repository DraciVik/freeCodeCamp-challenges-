import React from "react";
import Display from "./components/Display";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      calculation: "",
      operands: [],
      operators: []
    };
  }

  clearAll = () => {
    this.setState({
      result: "",
      calculation: "",
      operands: [],
      operators: []
    });
  };

  handleDecimal = e => {
    console.log(e.currentTarget.textContent);
    const { calculation, result, operands, operators } = this.state;
    let signs = "/*-+";

    if (calculation === "") {
      this.setState({
        calculation: "0."
      });
    } else if (signs.indexOf(calculation) !== -1 && operands > operators) {
      this.setState(prevState => ({
        calculation: "0.",
        operators: prevState.operators.concat(calculation)
      }));
    } else if (calculation.indexOf(".") === -1) {
      this.setState(prevState => ({
        calculation: prevState.calculation.concat(".")
      }));
    }
  };

  addNumberToCalculation = e => {
    let {
      operands,
      operators,
      result,
      calculation: myCalculation
    } = this.state;
    const signs = "/*-+";
    const currentText = e.currentTarget.textContent;

    //When the application starts we need to enter operands first on which to operate
    if (operands.length === 0) {
      // When a sign is clicked the operand is pushed into the operands array
      // Makes sure there are no trailing zeroes
      if (myCalculation === "0" && currentText !== "0") {
        this.setState({
          calculation: currentText
        });
      }
      // If no operands are pushed yet, the number gets bigger
      if (myCalculation !== "0") {
        this.setState(prevState => ({
          calculation: (prevState.calculation += currentText)
        }));
      }
    }
    // If operators and operands array length is equal and there is a sign entered - the sign is pushed to operators array
    if (
      operators.length === operands.length &&
      signs.indexOf(myCalculation === -1) &&
      operators.length !== 0
    ) {
      if (myCalculation === "0" && currentText !== "0") {
        this.setState(prevState => ({
          calculation: currentText
        }));
      }
      // If no operands are pushed yet, the number gets bigger
      if (myCalculation !== "0") {
        this.setState(prevState => ({
          calculation: (prevState.calculation += currentText)
        }));
      }
    }

    if (
      result === operands[0] &&
      operators.length === 0 &&
      myCalculation[0] === "0" &&
      myCalculation[1] === "."
    ) {
      this.setState(prevState => ({
        calculation: prevState.calculation.concat(currentText)
      }));
    }

    if (
      operators.length < operands.length &&
      signs.indexOf(myCalculation) !== -1
    ) {
      this.setState(prevState => ({
        operators: operators.concat(prevState.calculation),
        calculation: currentText
      }));
    }
  };

  applySign = e => {
    const currentText = e.currentTarget.textContent;
    let {
      calculation: myCalculation,
      operands: stateOperands,
      operators
    } = this.state;
    let signs = "/*-+";
    // Checks if an operator is pressed first before having anything to operate on
    if (
      stateOperands.length === 0 &&
      operators.length === 0 &&
      signs.indexOf(myCalculation) !== -1
    ) {
      return;
    }

    // If we change the sign
    if (signs.indexOf(myCalculation) !== -1) {
      this.setState({
        calculation: currentText
      });
    }

    // If the operands array is not empty and the calculation is a number
    if (
      stateOperands.length === 0 &&
      myCalculation &&
      signs.indexOf(myCalculation) === -1
    ) {
      // operands.push(calculation);

      this.setState(prevState => ({
        operands: stateOperands.concat(prevState.calculation),
        calculation: currentText
      }));
    }
    if (
      stateOperands.length === operators.length &&
      myCalculation &&
      signs.indexOf(myCalculation) === -1
    ) {
      // operands.push(myCalculation);
      this.setState(prevState => ({
        operands: stateOperands.concat(myCalculation),
        calculation: currentText
      }));
    }
  };

  calculate = () => {
    let { operands, operators } = this.state;
    let newResult = operands[0];
    const mathItUp = {
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

    for (let i = 0; i < operators.length; i += 1) {
      newResult = mathItUp[operators[i]](
        Number(newResult),
        Number(operands[i + 1])
      );
    }
    this.setState({
      result: newResult,
      calculation: "",
      operands: [newResult],
      operators: []
    });
  };

  equals = () => {
    const { calculation, operands: stateOperands } = this.state;
    const signs = "/*-+";
    // checks if calculation is not an empty string and it's not an operator
    if (calculation && signs.indexOf(calculation) === -1) {
      // this.setState(prevState => ({
      //    operands: [...prevState.operands, calculation]
      // }));

      /* For some reason when I try to update state  like I'm suposed to with setState and prevState (see above) the state doesn't update as it should and I keep getting a NaN as a result. Thats why I'm leaving this VERY WRONG way to update state for the time being.  */
      stateOperands.push(calculation);
    }
    this.calculate();
  };

  render() {
    let { result, calculation } = this.state;
    return (
      <div id="calculator">
        <Display result={result} calculation={calculation} />
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
          <button id="decimal" onClick={this.handleDecimal}>
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
