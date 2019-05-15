import React, { Component } from "react";
import Tone from "tone";

class Hihat extends Component {

  noiseSynthClickHandler = () => {
    var noiseSynth = new Tone.NoiseSynth().toMaster();
    noiseSynth.triggerAttackRelease("16n");

  };

  render() {
    return (
      <div>
        <button onClick={this.noiseSynthClickHandler}> {"Hihat"} </button>
      </div>
    );
  }
}

export default Hihat;
