import React, { Component } from "react";

class ClearPattern extends Component {
  handleClick = () => {
    this.props.clearPattern();
  };

  render() {
    return (
      <div
        className="huge ui vertical labeled icon buttons"
        onClick={this.handleClick}
      >
        <button
          className="clear pattern button "
          style={{
            height: "3.95rem",
            width: "17rem",
            marginTop: "20rem",
            marginLeft: "5.3rem",
            border: "2px solid black",
            background: "#F7F5E1",
            borderRadius: "13px"
          }}
        >
          <i className="trash icon" />Clear Pattern
        </button>
      </div>
    );
  }
}

export default ClearPattern;
