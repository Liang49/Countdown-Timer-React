import React, { Component } from 'react';


class InputBar extends React.Component {
    render() {
        return (
            <div>
                <h3>Set Time</h3>
                <input type="number" value={this.props.value} onChange={this.props.handleChange} />
                </div>
  
                
        )
    }
  }

  export default InputBar;


