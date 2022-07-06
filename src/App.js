/* eslint-disable */
import './App.css';
import React, { Component } from 'react';
class calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  render() {
    return (

      <div className="wrapper">

        <div className="show-input" />

        <div className="digits flex">
        
          <div className="modifiers subgrid" />
          <button type="button">9</button>
          <button type="button">8</button>
          <button type="button">7</button>
          <button type="button">6</button>
          <button type="button">5</button>
          <button type="button">4</button>
          <button type="button">3</button>
          <button type="button">2</button>
          <button type="button">1</button>
          <button  type="button">0</button>
          <button className = "zero" type="button">.</button>
        </div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>

        <div className="operations subgrid">

          <button value="+">
            +
          </button>
          <button value="-">
            -
          </button>
          <button value="*">
            *
          </button>
          <button value="/">/</button>
          <button

            value="="
          >
            =
          </button>
        </div>
      </div>

    );
  }
}

export default calculator;
