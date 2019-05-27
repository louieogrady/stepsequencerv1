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
          style={{
            border: "2px solid black",
            background: "#F7F5E1",
            borderRadius: "13px",

          }}
        >
          <i className="circle icon" />Record
        </button>
      </div>
    );
  }
}

export default RecordStart;
