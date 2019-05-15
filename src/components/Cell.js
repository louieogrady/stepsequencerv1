import React, { Component } from "react";


class Cell extends Component {

  clickHandler = (event) => {

    this.props.stepToggle ? event.target.style.background = 'navy' : event.target.style.background = 'white'

    this.props.stepToggle(event.target.id)
  }

  render() {
    return (
            <div className="box" > <div className="inner" id={this.props.id} onClick={this.clickHandler}  > </div></div>
    );
  }

}

export default Cell
