/* eslint-disable */
import React, { Component } from 'react';
import calculate from '../logic/calculate';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: null,
      operation: null,

    };
  }

calculateFunction = (x) => {
  this.setState((s) => calculate(s, x));
};

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator-body">
      <div className="display">
        <span>{next}</span>
        <span>{operation}</span>
        <span>{total}</span>
      </div>
      <div className="button">
        <button type="button" onClick={() => this.calculateFunction('AC')}>AC</button>
        <button  type="button" onClick={() => this.calculateFunction('+/-')}>+/-</button>
        <button value="%" type="button" onClick={() => this.calculateFunction('%')}>%</button>
        <button  value="/" className="operations-button" onClick={() => this.calculateFunction('/')} type="button">/</button>
        <br />

        <button value={1} type="button" onClick={() => this.calculateFunction('1')}>1</button>
        <button value={2} type="button" onClick={() => this.calculateFunction('2')}>2</button>
        <button value={3} type="button" onClick={() => this.calculateFunction('3')}>3</button>
        <button value="+" className="operations-button" onClick={() => this.calculateFunction('+')} type="button">+</button>
        <br />

        <button value={4} type="button" onClick={() => this.calculateFunction('4')}>4</button>
        <button value={5} type="button" onClick={() => this.calculateFunction('5')}>5</button>
        <button value={6} type="button" onClick={() => this.calculateFunction('6')}>6</button>
        <button value="-" className="operations-button" onClick={() => this.calculateFunction('-')} type="button">-</button>
        <br />

        <button value={7} type="button" onClick={() => this.calculateFunction('7')}>7</button>
        <button value={8} type="button" onClick={() => this.calculateFunction('8')}>8</button>
        <button value={9} type="button" onClick={() => this.calculateFunction('9')}>9</button>
        <button value="*" className="operations-button" onClick={() => this.calculateFunction('x')} type="button">x</button>
        <br />

        <button className="zero" value={0} onClick={() => this.calculateFunction('0')} type="button">0</button>
        <button value="." type="button" onClick={() => this.calculateFunction('.')}>.</button>
        <button className="operations-button" onClick={() => this.calculateFunction('=')} type="button">=</button>
        <br />
      </div>
      </div>
    );
  }
}

export default Calculator;

