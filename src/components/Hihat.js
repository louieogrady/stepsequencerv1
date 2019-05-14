import React, { Component } from "react";
import Tone from "tone";

class Hihat extends Component {

  noiseSynthClickHandler = () => {
    var noiseSynth = new Tone.NoiseSynth().toMaster();
    noiseSynth.triggerAttackRelease("16n");

  //   var seq = new Tone.Sequence(function(time, note){
  //     console.log(note);
  // }, ["C4", "E4", "G4", "A4"], "4n");

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
