import React, { Component } from "react";

class RecordStop extends Component {
  handleClick = () => {
    this.props.stopRecord();
  };

  render() {
    return (
      <div
        className=""
        onClick={this.handleClick}
      >
        <button
        className="record stop button"
        >
          <i className="stop icon" />Stop Recording
        </button>
      </div>
    );
  }
}

export default RecordStop
