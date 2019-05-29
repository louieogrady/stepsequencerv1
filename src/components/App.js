import React, { Component } from "react";
import * as Tone from "tone";
import * as download from 'downloadjs';


import "../App.css";

import kick from '../images/kick.png'
import clap from '../images/clap.png'
import snare from '../images/snare.png'
import conga from '../images/conga.png'
import cymbal from '../images/cymbal.png'
import hihat from '../images/hihat.png'

// import ch from "../samples/ch.wav",
// import clap from "../samples/clap.wav",
// // 		"E" : "../samples/claves.[mp3|ogg|wav]",
// // 		"F#" : "../samples/kick.[mp3|ogg|wav]",


import Title from "./Title.js";
import Cell from "./Cell.js";
import PlayPause from "./PlayPause.js";
import ClearPattern from "./ClearPattern.js";
import RandomPattern from "./RandomPattern.js";
import BpmSlider from "./BpmSlider.js";
import VolumeSlider from "./VolumeSlider.js";
import SwingSlider from "./SwingSlider.js";
import SnareDelayKnob from "./SnareDelayKnob.js";
import KickTuningKnob from "./KickTuningKnob.js";
import CongaTuningKnob from "./CongaTuningKnob.js";
import ClapReverbKnob from "./ClapReverbKnob.js"
import HihatDecayKnob from "./HihatDecayKnob.js"
import CymbalReleaseKnob from "./CymbalReleaseKnob.js"
import RecordStart from "./RecordStart.js"
// import FreqPopup from "./FreqPopup.js"



class App extends Component {

  state = {
    steps: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    bpm: 120,
    notes: ["A", "C#", "E", "F#"],
    column: 0,
    activeColumn: 0,
    time: 0,
    masterVolume: 0,
    kickDrumTuning: 43.65,
    congaTuning: 107,
    clapReverbWetLevel: 0,
    closedHihatDecayLevel: 0,
    mediaRecorderState: false
  };

  // randomValue = () => { setInterval(() => {
  //   return Math.random() * (0.01 - 2) + 1 }, 3000)
  // }
  //
  // randomisedKickValue = this.randomValue()
  // using Math.random() to generate random values to humanize certain attributes of the synth sounds
  // kickRandAttack = Math.random() * (0.004 - 0.002) + 0.1
  // snareRandDecay = Math.random() * (0.22 - 0.1) + 0.1
  // snareRandSustain = Math.random() * (0.1 - 0) + 0


  //      keys = new Tone.Players({
  // 		"A" : "../samples/ch.[mp3|ogg|wav]",
  // 		"C#" : "../samples/clap.[mp3|ogg|wav]",
  // 		"E" : "../samples/claves.[mp3|ogg|wav]",
  // 		"F#" : "../samples/kick.[mp3|ogg|wav]",
  // 	}, {
  // 		"volume" : -5,
  // 		"fadeOut" : "64n",
  // 	}).toMaster();




  /// INIT SYNTHS & FX ///

  // create master volume for App
  appVol = new Tone.Volume();

  // create pingpong delay for snare
  pingPong = new Tone.PingPongDelay({
    delayTime: "8n",
    feedback: 0.32,
    wet: 0            // wet level can be modified by user via the snaredelayknob
  })

  // create compressor for kick
  kickComp = new Tone.Compressor(-30, 2);

  // create reverb for clap
  clapReverb = new Tone.JCReverb({
    roomSize  : 0.3,
    wet: 0
  })

  // randomKickSustain = () => new Tone.CtrlRandom({
  //   min  : 0.01 ,
  //   max  : 0.06,
  //   integer  : false
  // })
  //
  // randomNum = () => setInterval(this.randomKickSustain, 1000)

  // kick
  kick = new Tone.MembraneSynth({
    volume: 0,
    pitchDecay : 0.032,
    octaves : 6,
    oscillator : {
      type : "square4"
    },
    envelope : {
      attack : 0.01,
      decay: 0.2,
      sustain : 0.01,
      release: 0.75,
    }
  }).chain(this.kickComp, this.appVol, Tone.Master);

  // snare
  snare = new Tone.NoiseSynth({
    volume: -8.3,
    noise: {
      type: "pink"
    },
    envelope: {
      attack: 0.002,
      decay: 0.21,
      sustain: 0.05
    }
  }).chain(this.pingPong, this.appVol, Tone.Master);

  // hihat
  closedHihat = new Tone.MetalSynth({
    volume: -58,
    frequency: 150,
    envelope: {
      attack: 0.002,
      decay: 0.25,
      release: 0.025
    },
    harmonicity: 4.1,
    modulationIndex: 40,
    resonance: 2000,
    octaves: 1
  }).chain(this.appVol, Tone.Master);

  // filter for clap
  clapFilter = new Tone.Filter({
    type  : "bandpass" ,
    frequency  : 1100,
    rolloff  : -12 ,
    Q  : 1,
    gain  : 1
  })

  // clap
  clap = new Tone.NoiseSynth({
    volume: -12,
    noise: {
      type: 'white',
      playbackRate: 1,
    },
    envelope: {
      attack: 0.001,
      decay: 0.13,
      sustain: 0,
      release: 0.02,
    },
  }).chain(this.clapFilter, this.clapReverb, this.appVol, Tone.Master);

  // conga
  conga = new Tone.MembraneSynth({
    volume: -2,
    "pitchDecay" : 0.005,
    "octaves" : 2,
    "envelope" : {
      "attack" : 0.001,
      "decay" : 0.37,
      "sustain" : 0.08
    }
  }).chain(this.appVol, Tone.Master);

  // cymbal
  cymbal = new Tone.MetalSynth({
    volume: -5,
    frequency: 1200,
    envelope: {
      attack: 0.001,
      decay: 0.15,
      release: 0.25
    },
    harmonicity: 5.1,
    modulationIndex: 32,
    resonance: 4000,
    octaves: 2
  }).chain(this.appVol, Tone.Master);


  // RECORDING VARIABLES //

  audioContext = Tone.context;

  dest = this.audioContext.createMediaStreamDestination();

  recorder = new MediaRecorder(this.dest.stream);

  output = Tone.Master;

  chunks = [];


  // CHANGE FUNCTIONS //

  changeKickDrumTuning = (value) => {
    this.setState({
      kickDrumTuning: value
    })
  }

  changeClapReverbLevel = (value) => {
    this.clapReverb.wet.value = value

    this.setState({
      clapReverbWetLevel: value
    })
  }

  changePingPongDelayLevel = (value) => {
    this.pingPong.wet.value = value;
  }

  changeCymbalDecayLevel = (value) => {
    this.closedHihat.envelope.decay = value
  }

  changeCymbalReleaseLevel = (value) => {
    this.cymbal.envelope.release = value
    this.cymbal.envelope.decay = value / 2
  }

  changeCongaTuning = (value) => {
    this.setState({
      congaTuning: value
    })
  }

  changeVolume = value => {
    this.appVol.volume.value = value;

    this.setState({
      masterVolume: value
    });
  };

  changeSwing = value => {
    Tone.Transport.swing = value;
  };

  changeBpm = value => {
    Tone.Transport.bpm.value = value;

    this.setState({
      bpm: value
    });
  };

  play = () => {
    Tone.Transport.bpm.value = this.state.bpm;
    Tone.Transport.toggle()
  };

  pause = () => {
    Tone.Transport.stop();
    console.log("paused");
  };

  stepToggle = (x, y) => {
    if (this.state.steps[x][y] === 0) {
      const newSteps = this.state.steps;
      newSteps[x][y] = 1;
      this.setState({ steps: newSteps });
    } else {
      const newSteps = this.state.steps;
      newSteps[x][y] = 0;
      this.setState({ steps: newSteps });
    }
    console.log(`You Clicked ${x} and ${y}`);
  };

  // ON INIT //

  componentDidMount() {
    this.loop = new Tone.Sequence(
      (time, col) => {
        this.setState({
          column: col
        });

        this.state.steps.map((row, noteIndex) => {
          if (row === this.state.steps[0] && row[col]) {
            // randomised velocities (volume of each triggered note)
            let vel = Math.random() * 0.5 + 0.5;
            // Trigger the sound to be played here

            this.kick.triggerAttackRelease(
              this.state.kickDrumTuning,
              "16n",
              time,
              vel
            );
          } else if (row === this.state.steps[1] && row[col]) {
            let vel = Math.random() * 0.5 + 0.5;
            this.cymbal.triggerAttackRelease(
              "8n",
              time,
              vel
            );
          } else if (row === this.state.steps[2] && row[col]) {
            let vel = Math.random() * 0.5 + 0.5;
            this.clap.triggerAttackRelease(
              "16n",
              time,
              vel
            );
          } else if (row === this.state.steps[3] && row[col]) {
            let vel = Math.random() * 0.45 + 0.45;
            this.snare.triggerAttackRelease("16n", time, vel);
          } else if (row === this.state.steps[4] && row[col]) {
            // let vel = Math.random() * 0.5 + 0.5;
            this.closedHihat.triggerAttackRelease("16n", time, -12);
          } else if (row === this.state.steps[5] && row[col]) {
            let vel = Math.random() * 0.5 + 0.5;
            this.conga.triggerAttackRelease(
              this.state.congaTuning,
              "16n",
              time,
              vel
            );
          }
        });
        this.setState({
          activeColumn: col
        });

        this.setState({
          time: time
        });

        // Tone.Draw.schedule(() => {
        //   this.backgroundDisco()
        // }, "16n", time);


      },
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],   // or this.state.steps[0].map((_, i) => i) -
      "16n"
    ).start(0);

    this.setState({
      masterVolume: this.appVol.volume.value
    });
    return () => this.loop.dispose();

  }


  // PATTERN-RELATED FUNCTIONS //

  randomPattern = () => {
    let makeARandomNumber = () => {
      return Math.random() > 0.8 ? 1 : 0;  // if number returned is greater 0.8 than make it 1 otherwise its 0
    }

    let randoms = Array(16).fill(0).map(makeARandomNumber);
    let randoms1 = Array(16).fill(0).map(makeARandomNumber);
    let randoms2 = Array(16).fill(0).map(makeARandomNumber);
    let randoms3 = Array(16).fill(0).map(makeARandomNumber);
    let randoms4 = Array(16).fill(0).map(makeARandomNumber);
    let randoms5 = Array(16).fill(0).map(makeARandomNumber);

    let randomSteps = [randoms, randoms1, randoms2, randoms3, randoms4, randoms5]

    this.setState({
      steps: randomSteps
    })
  }

  clearPattern = () => {
    this.setState({
      steps: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    });
  };

  record = () => {
    if (this.state.mediaRecorderState === false) {
      this.output.connect(this.dest);
      this.recorder.start()

      this.recorder.ondataavailable = evt => this.chunks.push(evt.data);

      this.setState({
        mediaRecorderState: true
      })
    } else {
      this.recorder.stop()

      this.recorder.onstop = evt => {
        let blob = new Blob(this.chunks, { type: 'audio/wav; codecs=opus' });
        download(blob, "rhythmcomposer.wav", 'audio/wav')
      };

      this.setState({
        mediaRecorderState: false
      })

      this.chunks = [];
    }

  }

  render() {
    let cells = this.state.steps.map((row, xCoord) => {
      return (
        <div className="row">
          {row.map((cell, yCoord) => (
            <Cell
              stepToggle={this.stepToggle}
              x={xCoord}
              y={yCoord}
              activeColumn={this.state.activeColumn}
              steps={this.state.steps}
            />
          ))}
        </div>
      );
    });



    return (
      <div>
        <div className="App">
          <div className="title-div"><Title /></div>
            <div className="content">
              <div className="icons">
                <div><img className="kick" src={kick} alt="kick"/></div>
                <div><img className="clap" src={clap} alt="clap" /></div>
                <div><img className="snare" src={snare} alt="snare" /></div>
                <div><img className="hihat" src={hihat} alt="hihat" /></div>
                <div><img className="conga" src={conga} alt="conga" /></div>
                <div><img className="cymbal" src={cymbal} alt="cymbal" /></div>
              </div>


              <div className="grid">{cells}
                <div className="buttons-knobs-container">
                <div className="buttons">
                  <div><PlayPause play={this.play} pause={this.pause} playState={this.playState} /></div>
                  <div><ClearPattern clearPattern={this.clearPattern} /></div>
                  <div><RandomPattern randomPattern={this.randomPattern} /></div>
                </div>

                <div className="lower-record-buttons">
                  <div><RecordStart className="record-button-start" record={this.record}/></div>
                </div>

                <div className="bottom-knobs">
                  <div className="bpm-slider"><BpmSlider changeBpm={this.changeBpm} /></div>
                  <div className="swing-slider"><SwingSlider changeSwing={this.changeSwing} /></div>
                  <div className="volume-slider"><VolumeSlider changeVolume={this.changeVolume} /></div>
                </div>

              </div>
            </div>
            <div className="side-knobs">
              <div className="kick-tuning-knob"><KickTuningKnob changeKickDrumTuning={this.changeKickDrumTuning} /></div>
              <div className="hihat-decay-knob"><HihatDecayKnob changeCymbalDecayLevel={this.changeCymbalDecayLevel} /></div>
              <div className="clap-reverb-knob"><ClapReverbKnob changeClapReverbLevel={this.changeClapReverbLevel} /></div>
              <div className="snare-delay-knob"><SnareDelayKnob changePingPongDelayLevel={this.changePingPongDelayLevel} /></div>
              <div className="cymbal-release-knob"><CymbalReleaseKnob changeCymbalReleaseLevel={this.changeCymbalReleaseLevel} /></div>
              <div className="conga-tuning-knob"><CongaTuningKnob changeCongaTuning={this.changeCongaTuning} /></div>
            </div>



          </div>
        </div>
      </div>
    );
  }
}

export default App;
