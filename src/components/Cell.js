import React, { Component } from "react";

class Cell extends Component {

  state = {
    active: false,
    steps: this.props.steps
  }

  // toggleActive = () => {
  //   this.setState({
  //     active: !this.state.active
  //   })
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  // return nextProps.steps === prevState.steps
  //   ? {}
  //   : {steps: nextProps.steps}
  // }

  clickHandler = (event) => {
    // this.toggleActive()
    this.props.stepToggle(this.props.x, this.props.y)

    if (this.props.steps[this.props.x][this.props.y] === 0) {
      event.target.style.background = 'white'
    } else {
      event.target.style.background = '#6FE596'
    }

    this.setState({
      steps: this.props.steps
    })

    // this.state.active ? event.target.style.background = 'white' : event.target.style.background = '#6FE596'

  }

  render() {
    return (
            <div className="box" style={{border: this.props.activeColumn === this.props.y ? "2px solid pink" : null} }> <div className="inner" id={this.props.id} onClick={this.clickHandler}  > </div></div>
    );
  }

}

export default Cell
