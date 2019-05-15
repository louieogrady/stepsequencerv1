import React, { Component } from "react";


class Cell extends Component {

  state = {
    active: false
  }

  clickHandler = (event) => {
    this.props.stepToggle(this.props.x, this.props.y)

    this.props.active ? event.target.style.background = 'white' : event.target.style.background = '#6FE596'

  }


  render() {
    return (
            <div className="box" > <div className="inner" id={this.props.id} onClick={this.clickHandler}  > </div></div>
    );
  }

}

export default Cell
