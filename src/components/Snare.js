import React, { Component } from "react";
import Tone from "tone";

class Snare extends Component {

  snareClickHandler = () => {
    var tom = new Tone.MembraneSynth();
    var snare = new Tone.NoiseSynth({
      noise: {
        type: "brown"
      },
      envelope: {
        attack: 0.50,
        decay: 0.1,
        sustain: 0.02
      }
    });

    var reverb = new Tone.Freeverb({
      roomSize: 0.3,
      dampening: 8000
    });
    var feedbackDelay = new Tone.FeedbackDelay({
      delayTime: "32n",
      feedback: 0.25
    });

    var gate = new Tone.Gate(-50);
    var compressor = new Tone.MidSideCompressor();
    var gain = new Tone.Gain();

  //  snare.chain(reverb, gate, compressor, gain);
    snare.chain(gate, gain);

    //tom.chain(reverb, gate, compressor, gain);
    tom.chain(compressor, gain);

    gain.chain(Tone.Master); // dry

    snare.triggerAttackRelease("8n");
    //tom.triggerAttackRelease("C1", "8n");
  };

  render() {
    return (
      <div>
        <button onClick={this.snareClickHandler}> {"Snare"} </button>

      </div>
    )
  }

}

export default Snare;
