/* eslint-disable */
import React, { Component } from 'react';

class Results extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default Results;
