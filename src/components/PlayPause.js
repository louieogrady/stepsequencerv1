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
    return (
      <div className="huge ui vertical labeled icon buttons">
        <button
          className="play button "
          onClick={this.handleClick}
          style={{
            height: "3.95rem",
            width: "15.2rem",
            marginTop: "32.5rem",
            marginLeft: "12.4rem",
            border: "2px solid black",
            background: "#F7F5E1"
          }}
        >
          <i className="play icon" />
          {this.state.playing ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default PlayPause;
