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
      <button className="play-pause-button" onClick={this.handleClick}>
      {this.state.playing ? 'Pause' : 'Play'}
      </button>
    );
  }
}

export default PlayPause;
