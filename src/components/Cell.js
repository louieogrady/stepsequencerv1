import React, { Component } from "react";

class Cell extends Component {

  state = {
    active: false,
    steps: this.props.steps
  };

  clickHandler = event => {
    this.props.stepToggle(this.props.x, this.props.y);

    this.setState({
      steps: this.props.steps
    });

  };

  render() {
    return (
      <div
        className="box"
        style={{
          border:
            this.props.activeColumn === this.props.y
              ? "2px solid #5B5D98"
              : "2px solid black"
        }}
      >
        <div
          className="inner"
          id={this.props.id}
          onClick={this.clickHandler}
          style={{
            background:
              this.props.steps[this.props.x][this.props.y] === 0
                ? "#F7F5E1"
                : "#6FE596"
          }}
        >
        </div>
      </div>
    );
  }
}

export default Cell;
