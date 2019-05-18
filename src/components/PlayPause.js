import React, { Component } from 'react';

class PlayPause extends Component {

  state = {
    playing: false
  }

  handleClick = () => {
    if (this.state.playing) {
      this.props.pause();
    } else {
      this.props.play();
    }
    this.setState({
      playing: !this.state.playing
    });

  }

  render() {
    return (
      <div className="ui vertical labeled icon buttons"  onClick={this.handleClick}>
      <button className="play button big" style={{ top: "40rem", left: "10.5rem"}}>
      <i className="play icon" ></i>
      {this.state.playing ? 'Pause' : 'Play'}
      </button>
      </div>

    );
  }
}

export default PlayPause;
