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
    const renderBorderMovement =
      this.props.activeColumn === this.props.y
        ? "2px solid #ffff4d"
        : "2px solid black";

    const renderDivColors =
      this.props.steps[this.props.x][this.props.y] === 1
        ? "#b0c4e8"
        : this.props.y % 4 === 0
        ? "#E3C5BA"
        : "#F7F5E1";

    return (
      <div
        className="box"
        style={{
          border: renderBorderMovement
        }}
      >
        <div
          className="inner"
          id={this.props.id}
          onClick={this.clickHandler}
          style={{
            background: renderDivColors
          }}
        />

      </div>
    );
  }
}

export default Cell;
