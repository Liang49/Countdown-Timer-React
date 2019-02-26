import React, {Component} from 'react'


class Button extends React.Component {
    render() {
        return(
            <div>
            <button className="buttons" onClick={this.props.startCounter}>Start</button>
            <button className="buttons" onClick={this.props.pause}>Pause</button>
            <button className="buttons" onClick={this.props.reset}>Reset</button>
   </div>
        )
    }
}

export default Button