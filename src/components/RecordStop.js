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
          <i style={{fontSize: '1.2vw'}} lassName="stop icon" />Stop Recording
        </button>
      </div>
    );
  }
}

export default RecordStop
