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

  renderDivColors = () =>
    this.props.steps[this.props.x][this.props.y] === 1
      ? "#297DFD"
      : this.props.y % 4 === 0
      ? "#FD9D29"
      : "#F7F5E1";

  renderBorderMovement = () =>
    this.props.activeColumn === this.props.y
      ? "2px solid #FDA329"
      : "2px solid black";

  render() {
    return (
      <div
        className="box"
        style={{
          border: this.renderBorderMovement()
        }}
      >
        <div
          className="inner"
          id={this.props.id}
          onClick={this.clickHandler}
          style={{
            background: this.renderDivColors()
          }}
        />
      </div>
    );
  }
}

export default Cell;
