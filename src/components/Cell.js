import React, { Component } from "react";


class Cell extends Component {

  clickHandler = (event) => {

    this.props.buttonToggle ? event.target.style.background = 'white' : event.target.style.background = '#6FE596'

    this.props.stepToggle(event.target.id)
  }


  render() {
    return (
            <div className="box" > <div className="inner" id={this.props.id} onClick={this.clickHandler}  > </div></div>
    );
  }

}

export default Cell
