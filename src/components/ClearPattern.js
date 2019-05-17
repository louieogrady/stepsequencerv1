import React, { Component } from 'react';

class ClearPattern extends Component {

  handleClick = () => {
    this.props.clearPattern()
  }

  render() {
    return (
      <button class="ui basic button big"  onClick={this.handleClick} style={{position: "absolute", top: "40rem", left: "20.7rem"}}>
      <i class="trash icon" ></i>Clear Pattern
      </button>
    );
  }

}

export default ClearPattern
