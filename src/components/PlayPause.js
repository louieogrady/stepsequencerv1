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
      <div className="huge ui vertical labeled icon buttons"  onClick={this.handleClick}>
      <button className="play button " style={{ height: "3.95rem", width: "15.2rem", marginTop: "32.5rem", marginLeft: "12.4rem", border: "2px solid black"}}>
      <i className="play icon" ></i>
      {this.state.playing ? 'Pause' : 'Play'}
      </button>
      </div>

    );
  }
}

export default PlayPause;
