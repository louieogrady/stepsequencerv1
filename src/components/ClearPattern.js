import React, { Component } from 'react';

class ClearPattern extends Component {

  handleClick = () => {
    this.props.clearPattern()
  }

  render() {
    return (
      <button className="huge ui basic button "  onClick={this.handleClick} style={{position: "absolute", top: "40rem", left: "29.7rem", border: "2px solid black"}}>
      <i className="trash icon" ></i>Clear Pattern
      </button>
    );
  }

}

export default ClearPattern
