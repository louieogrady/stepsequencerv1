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


  renderDivColors = () => this.props.steps[this.props.x][this.props.y] === 1 ? "#b0c4e8": this.props.y % 4 === 0 ? '#E3C5BA' : '#F7F5E1'

  render() {
    return (
      <div
        className="box"
        style={{
          border:
            this.props.activeColumn === this.props.y
              ? "2px solid #ffff4d"
              : "2px solid black"
        }}
      >
        <div
          className="inner"
          id={this.props.id}
          onClick={this.clickHandler}

          style={{background: this.renderDivColors()}}
        >
        </div>
      </div>
    );
  }
}

export default Cell;

// this.props.steps[this.props.x].map((e, i) => i === 0 || i === 4 || i  === 8 || i === 11)
