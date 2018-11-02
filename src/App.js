import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import CalculationArea from './CalculationArea';
import Title from './Title';
import WorksCited from './WorksCited';

class App extends Component {

  calcedNumber = "";
  bufferedOperation = "";
  currentNumber = "0";

  constructor() {
    super();
    this.state = { currentNumber: 0 };
  }


  handleChange(input) {
    this.setState({ currentNumber: input });
  }

  handleClick = e => {
    const clicked = e.target.getAttribute('value');
    switch (clicked) {
      case "clear":
        this.currentNumber = "0";
        this.calcedNumber = "";
        break;
      case '=':
      console.log(this.calcedNumber + this.bufferedOperation + this.currentNumber);
        this.calcedNumber = eval(this.calcedNumber + this.bufferedOperation + this.currentNumber);
        this.currentNumber = this.calcedNumber;
        this.bufferedOperation = "";
        break;
      case '+': case '-': case '*': case '/':
        if (!this.bufferedOperation) {
          this.calcedNumber = this.currentNumber;
          this.currentNumber = "0";
          this.bufferedOperation = clicked;
        }
        else {
          this.calcedNumber = eval(this.calcedNumber + this.bufferedOperation + this.currentNumber);
          this.currentNumber = this.calcedNumber;
          this.bufferedOperation = "";
        }
        break;
      default:
        if (this.currentNumber == 0) {
          this.currentNumber = "";
        }
        this.currentNumber = this.currentNumber + clicked;
    }
    this.handleChange(this.currentNumber);
  }

  render() {
    return (
      <div className="App">
        <Title></Title>
        <CalculationArea display={this.state.currentNumber}></CalculationArea>
        <Button onClick={this.handleClick} label="1" value="1"></Button>
        <Button onClick={this.handleClick} label="2" value="2"></Button>
        <Button onClick={this.handleClick} label="3" value="3"></Button>
        <Button onClick={this.handleClick} label="4" value="4"></Button>
        <Button onClick={this.handleClick} label="5" value="5"></Button>
        <Button onClick={this.handleClick} label="6" value="6"></Button>
        <Button onClick={this.handleClick} label="7" value="7"></Button>
        <Button onClick={this.handleClick} label="8" value="8"></Button>
        <Button onClick={this.handleClick} label="9" value="9"></Button>
        <Button onClick={this.handleClick} label="+" value="+"></Button>
        <Button onClick={this.handleClick} label="-" value="-"></Button>
        <Button onClick={this.handleClick} label="*" value="*"></Button>
        <Button onClick={this.handleClick} label="/" value="/"></Button>
        <Button onClick={this.handleClick} label="clear" value="clear"></Button>
        <Button onClick={this.handleClick} label="=" value="="></Button>
        <WorksCited></WorksCited>
      </div>
    );
  }
}

export default App;
