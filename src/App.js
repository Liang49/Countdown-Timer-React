import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import InputBar from './InputBar';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: '00',
      value: '0'
    }
    this.handleChange = this.handleChange.bind(this);
    this.start = this.start.bind(this);
    this.startCounter = this.startCounter.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);

    /*this.intervalId = setInterval(this.start.bind(this), 1000); */

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })

    
  }



 start() {

   this.setState({
     seconds: this.state.seconds - 1,
     value: this.state.value
   })
  
   if(this.state.seconds < 1) {
     this.setState({
       seconds: '0'
     })
   }
   if(this.state.seconds < 1 && this.state.value > 0) {
     this.setState({
       value: this.state.value - 1,
       seconds: 59
     })
   }
   
   if(this.state.seconds < 10) {
     this.setState({
       seconds: '0' + this.state.seconds
     })
   }


   if(this.state.value < 1) {
     this.setState({
       value: '00'
     })
   }

 }


 startCounter() {
  clearInterval(this.intervalId)

  this.intervalId = setInterval(this.start, 1000);


 }
pause() {
  clearInterval(this.intervalId)
}
 reset() {
  this.setState({
    seconds: '00',
    value: '00'
  })
  clearInterval(this.intervalId)
}

  render() {


    return (
      <div>
      <InputBar handleChange={this.handleChange} />
      <Timer value = {this.state.value} seconds={this.state.seconds} />
      <Button value = {this.state.value} startCounter={this.startCounter} reset={this.reset} pause={this.pause} />
      </div>
    );
  }
}

export default App;
