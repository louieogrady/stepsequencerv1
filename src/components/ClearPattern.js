import React, { Component } from 'react';

class ClearPattern extends Component {

  handleClick = () => {
    this.props.clearPattern()
  }

  render() {
    return (
      <button class="ui basic button"  onClick={this.handleClick} style={{position: "absolute", margin: "563px 10px 150px 175px"}}>
      Clear Pattern
      </button>
    );
  }

}

export default ClearPattern
