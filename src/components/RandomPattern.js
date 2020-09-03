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
          className="trans-button random"
        >
          <div className="button-inner">
            <i style={{fontSize: '1.2vw'}} className="random icon"/>
            <p className="icon-text">Randomize</p>   
          </div>
        </button>
      </div>
    );
  }
}

export default RandomPattern;
