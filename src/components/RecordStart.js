import React, { Component } from "react";

class RecordStart extends Component {
  handleClick = () => {
    this.props.record();
  };

  render() {
    return (
      <div
        className="huge ui vertical labeled icon buttons"
        onClick={this.handleClick}
      >
        <button
        className="record start button"
          style={{
            border: "2px solid black",
            background: "#F7F5E1",
            borderRadius: "13px",

          }}
        >
          <i className="circle icon" />Start Recording
        </button>
      </div>
    );
  }
}

export default RecordStart;
