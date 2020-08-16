import React, { Component } from "react";

class ClearPattern extends Component {
  handleClick = () => {
    this.props.clearPattern();
  };

  render() {
    return (
      <div
        className=""
        onClick={this.handleClick}
      >
        <button
          className="trans-button"
        >
          <div className="button-inner">
            <i className="trash icon" />
            <p className="icon-text">Clear</p> 
          </div>
        </button>
      </div>
    );
  }
}

export default ClearPattern;
