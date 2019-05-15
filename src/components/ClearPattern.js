import React, { Component } from 'react';

class ClearPattern extends Component {

  handleClick = () => {
    this.props.clearPattern()
  }

  render() {
    return (
      <button className="clear-pattern-button" onClick={this.handleClick}>
      Clear Pattern
      </button>
    );
  }

}

export default ClearPattern
