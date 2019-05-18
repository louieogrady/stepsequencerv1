import React, { Component } from "react";

class Cell extends Component {

  state = {
    active: false
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    })
  }

  clickHandler = (event) => {
    this.toggleActive()
    this.props.stepToggle(this.props.x, this.props.y)
    this.state.active ? event.target.style.background = 'white' : event.target.style.background = '#6FE596'
  }


style="{isLoggedIn ? 'display:' : 'display:none'}"

  render() {
    return (
            <div className="box" style={this.props.activeColumn === this.props.id ? {background: "15px solid gray;"} : null}> <div className="inner" id={this.props.id} onClick={this.clickHandler}  > </div></div>
    );
  }

}





export default Cell
