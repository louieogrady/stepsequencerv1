import React, { Component } from "react";

class RandomPattern extends Component {
  handleClick = () => {
    this.props.randomPattern();
  };

  render() {
    return (
      <div
        className=""
        onClick={this.handleClick}
      >
        <button
          className="trans-button"
          style={{
            width: '13vw',
          }}
        >
          <div className="button-inner">
            <i className="random icon" />
            <p className="icon-text">Randomize</p>   
          </div>
        </button>
      </div>
    );
  }
}

export default RandomPattern;
