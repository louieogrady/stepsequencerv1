import React, { Component } from "react";

class RecordStop extends Component {
  handleClick = () => {
    this.props.stopRecord();
  };

  render() {
    return (
      <div
        className="huge ui vertical labeled icon buttons"
        onClick={this.handleClick}
      >
        <button
        className="record stop button"
          style={{
            border: "2px solid black",
            background: "#F7F5E1",
            borderRadius: "13px",
          }}
        >
          <i className="stop icon" />Stop Recording
        </button>
      </div>
    );
  }
}

export default RecordStop
