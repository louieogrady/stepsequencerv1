import React, { Component } from "react";

class ClearPattern extends Component {
  handleClick = () => {
    this.props.clearPattern();
  };

  render() {
    return (
      <div className="huge ui vertical labeled icon buttons"  onClick={this.handleClick}>
      <button className="clear pattern button " style={{ height: "3.95rem", width: "17rem", marginTop: "32.5rem", marginLeft: "5.3rem", border: "2px solid black"}}>
      <i className="trash icon" ></i>Clear Pattern
      </button>
      </div>
    );
  }
}

export default ClearPattern;
