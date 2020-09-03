import React, { Component } from "react";

class PlayPause extends Component {
  state = {
    playing: false
  };

  handleClick = () => {
    if (this.state.playing) {
      this.props.pause();
    } else {
      this.props.play();
    }
    this.setState({
      playing: !this.state.playing
    });
  };

  render() {

    const playButtonClass = this.state.playing ? 'pause icon' : 'play icon'

    return (
      <div className="">
        <button
          className="trans-button"
          onClick={this.handleClick}
        >
          <div className="button-inner">
            <i style={{fontSize: '1vw'}} className={playButtonClass} />
            <p className="icon-text">{this.state.playing ? "Pause" : "Play"}</p>
          </div>
        </button>
      </div>
    );
  }
}

export default PlayPause;
