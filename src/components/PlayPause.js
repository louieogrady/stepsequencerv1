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
      <div class="ui vertical labeled icon buttons" style={{grid: 4/5}}>
      <button class="play button" style={{top: "560px", left: "140px "}}>
      <i class="play icon" onClick={this.handleClick}></i>
      {this.state.playing ? 'Pause' : 'Play'}
      </button>
      </div>

    );
  }
}

export default PlayPause;
