import React, { Component } from 'react';




class Timer extends React.Component {
    render() {
      return (
        <div className="timer">
          <h1>{this.props.value}:{this.props.seconds}</h1>
        </div>
      );
    }
  }

export default Timer;