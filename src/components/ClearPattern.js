import React, { Component } from 'react';

class ClearPattern extends Component {

  handleClick = () => {
    this.props.clearPattern()
  }

  render() {
    return (
      <button className="ui basic button "  onClick={this.handleClick} style={{position: "absolute", top: "40rem", left: "20.7rem"}}>
      <i className="trash icon" ></i>Clear Pattern
      </button>
    );
  }

}

export default ClearPattern
