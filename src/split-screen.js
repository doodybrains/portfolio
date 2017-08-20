import React, { Component } from 'react';
import './split-screen.css';

class SplitScreen extends Component {
  render() {
    return (
      <div className="split-wrapper">
        <div className="left-container">
          <h1>{this.props.title}</h1>
          <h2>{this.props.subTitle}</h2>
          <p>{this.props.mainText}</p>
        </div>
        <div className="right-container">
          
        </div>
      </div>
    );
  }
}

export default SplitScreen;
