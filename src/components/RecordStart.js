import React, { Component } from "react";

class RecordStart extends Component {
  state = {
    recording: false
  }

  handleClick = () => {
    this.props.record();

    this.setState({
      recording: !this.state.recording
    })
  };

  render() {

    const recordingButtonStyle = this.state.recording ? "red circle icon" : "circle icon"

    return (
      <div
        className=""
        onClick={this.handleClick}
      >
        <button
        className="record start button"
        >
           <i className={recordingButtonStyle} />
          {this.state.recording ? "Recording..." : "Record"}
        </button>
      </div>
    );
  }
}

export default RecordStart;
