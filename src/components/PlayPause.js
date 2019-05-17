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
      <div class="ui vertical labeled icon buttons"  onClick={this.handleClick}>
      <button class="play button" style={{ top: "562px", left: "139px "}}>
      <i class="play icon" ></i>
      {this.state.playing ? 'Pause' : 'Play'}
      </button>
      </div>

    );
  }
}

export default PlayPause;
