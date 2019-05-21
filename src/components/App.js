import React, { Component } from "react";
import * as Tone from "tone";

import "../App.css";

import Title from "./Title.js";
import Cell from "./Cell.js";
import PlayPause from "./PlayPause.js";
import ClearPattern from "./ClearPattern.js";
import BpmSlider from "./BpmSlider.js";
import VolumeSlider from "./VolumeSlider.js";
import SwingSlider from "./SwingSlider.js";
import SnareDelayKnob from "./SnareDelayKnob.js";
import KickTuningKnob from "./KickTuningKnob.js";
import CongaTuningKnob from "./CongaTuningKnob.js";


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
    playing: Tone.Transport.state, // returns the playback state of Transport, either “started”, “stopped”, or “paused”
    notes: ["D1", "D#3", "F#2", "G#1", "A#2", "C#1", "G#3", "G1"],
    playState: Tone.Transport.state,
    column: 0,
    activeColumn: 0,
    time: 0,
    masterVolume: 0,
    kickDrumTuning: 43.65,
    congaTuning: 220
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

  // create master volume for App
  appVol = new Tone.Volume();

  // create chorus effect
  chorus = new Tone.Chorus(4, 2.5, 0.5);

  // create pingpong delay
  pingPong = new Tone.PingPongDelay({delayTime: "8n", feedback: 0.32, wet: 0}) // wet level can be modified by user via the snaredelayknob

  // create compressor for kick
  kickComp = new Tone.Compressor(-30, 2);


  kick = new Tone.MembraneSynth({
			pitchDecay : 0.032,
			octaves : 6,
			oscillator : {
				type : "square4"
			},
			envelope : {
				attack : 0.001,
				decay: 0.2,
				sustain : 0.01,
        release: 0.75,
			}
    }).chain(this.kickComp, this.appVol, Tone.Master);

  kickVolume = (this.kick.volume.value = 0);
  kickVolume;

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
    frequency: 150,
    envelope: {
      attack: 0.002,
      decay: 0.35,
      release: 0.1
    },
    harmonicity: 4.1,
    modulationIndex: 40,
    resonance: 2000,
    octaves: 1
  }).chain(this.appVol, Tone.Master);

  closedHiHatVolume = (this.closedHihat.volume.value = -55);
  closedHiHatVolume;

  // filter for clap
  clapFilter = new Tone.Filter({
    type  : "bandpass" ,
    frequency  : 1100,
    rolloff  : -12 ,
    Q  : 1 ,
    gain  : 1
  })

  // create synth for clap
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
  }).chain(this.clapFilter, this.appVol, Tone.Master);

  conga = new Tone.MembraneSynth({
    "pitchDecay" : 0.005,
    "octaves" : 2,
    "envelope" : {
      "attack" : 0.001,
      "decay" : 0.37,
      "sustain" : 0.08
    }
  }).chain(this.appVol, Tone.Master);

  cymbal = new Tone.MetalSynth({
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

  // keys = new Tone.Players({
  // 		"A" : "../assets/ch.[mp3|ogg|wav]",
  // 		"C#" : "../assets/clap.[mp3|ogg|wav]",
  // 		"E" : "../assets/claves.[mp3|ogg|wav]",
  // 		"F#" : "../assets/kick.[mp3|ogg|wav]",
  // 	}, {
  // 		"volume" : -5,
  // 		"fadeOut" : "64n",
  // 	}).toMaster();


  changeKickDrumTuning = (value) => {
    this.setState({
      kickDrumTuning: value
    })
  }

  changePingPongDelayLevel = (value) => {
    this.pingPong.wet.value = value
    this.setState({
      pingPongWetLevel: value
    })
  }

  changeCongaTuning = (value) => {
    this.setState({
      congaTuning: value
    })
  }

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
            let vel = Math.random() * 0.5 + 0.5;
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
        // this.state.activeColumn = col

        this.setState({
          time: time
        });
        //   Tone.Draw.schedule(function(){
        // 	document.querySelector(".grid").setAttribute("highlight", col);
        // }, time);
        //this.state.steps.map((row) => { return row.map((x, ycoord) => { return ycoord})})

        console.log(Tone.Transport.position);
      },
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "16n"
      // this.state.steps[0], // defines the parts of the sequence, lets use first row of the steps - doesn't matter what number this is as long as its 0-5 (pertaining to rows)
      // "16n"
    ).start(0);

    this.setState({
      masterVolume: this.appVol.volume.value
    });

    return () => this.loop.dispose();
    //
    // Tone.Transport.loop = true
    // Tone.Transport.start()
    // this.loop.start(0)
  }

  pause = () => {
    Tone.Transport.stop();
    console.log("paused");
  };

  toggle = () => {
    Tone.Transport.toggle();
  };

  play = () => {
    Tone.Transport.bpm.value = this.state.bpm;
    Tone.Transport.toggle()

    this.setState({
      playState: Tone.Transport.State
    });
  };

  // testHandleClick = () => {
  //
  //   // var loop = new Tone.Loop(function(time) {
  //
  //     //triggered every eighth note.
  //   //   console.log(time);
  //   // }, "2n").start(0);
  //   // Tone.Transport.start();
  //
  //   let loop = new Tone.Sequence(
  //
  //       (time, col) => {
  //
  //         this.state.setColumn(col)
  //
  //
  //         // Loop current pattern
  //         this.state.steps.map((row, noteIndex) => {
  //           // Update active column for animation
  //
  //           // If active -- 0 will return falsy / 1 return truthy
  //           if (row[col]) {
  //             // Play based on which row
  //             const drumSynth = new Tone.MembraneSynth().toMaster();
  //               drumSynth.triggerAttackRelease("c1", "8n");   // ("c1", "8n", time);
  //           }
  //         })
  //       },
  //       [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
  //       "16n"
  //     ).start(0)
  //   return () => loop.dispose()
  // }, this.state.steps )
  //

  // drummer(time) {
  //   const drumSynth = new Tone.MembraneSynth().toMaster();
  //   // const triggerDrumSynth = drumSynth.triggerAttackRelease("c1", "8n", time);
  //   // const triggerDrumSynth2 = drumSynth2.triggerAttackRelease("e2", "16n", time);
  //
  //   // let loopBeat = new Loop(this.triggerDrumSynth, "4n", time);
  //   //
  //   // let loopBeat2 = new Loop(this.triggerDrumSynth2, "8n", time)
  //   // Transport.loop = '4'
  //   // Transport.loopStart = '0'
  //   // Transport.loopEnd = '1m'
  //   //
  //   // // Transport.start();
  //   // //
  //   // //
  //   // // // loopBeat.start(0);
  //   // // // loopBeat2.start(0);
  //   console.log(time);
  //
  //   debugger;
  // }

  // createLoop = () => {
  //     if (!this.state.steps) { return; }
  //     Transport.clear(this.loopId);
  //     const loop = (time: number) => {
  //         this.state.steps.forEach((s, i) => {
  //             if (s) {
  //                 this.sound.trigger(time + i * Time('16n').toSeconds())
  //             }
  //         });
  //     }
  //     this.loopId = Transport.schedule(loop, "0");
  // }
  //
  //
  // loop = new Loop(function(time){
  //   //triggered every eighth note.
  //   console.log(time);
  // }, "8n").start(0);
  // Transport.start();

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

  clearPattern = () => {
    console.log("You cleared the pattern");
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

  changeBpm = value => {
    Tone.Transport.bpm.value = value;

    this.setState({
      bpm: value
    });
  };

  changeVolume = value => {
    this.appVol.volume.value = value;

    this.setState({
      masterVolume: value
    });
  };

  changeSwing = value => {
    Tone.Transport.swing = value;
  };

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
      <div className="App">
        <Title />

        <div className="grid">{cells}</div>

        <PlayPause
          play={this.play}
          pause={this.pause}
          playState={this.playState}
        />

        <ClearPattern clearPattern={this.clearPattern} />

        <BpmSlider changeBpm={this.changeBpm} />
        <VolumeSlider changeVolume={this.changeVolume} />
        <SwingSlider changeSwing={this.changeSwing} />
        <SnareDelayKnob changePingPongDelayLevel={this.changePingPongDelayLevel} />
        <KickTuningKnob changeKickDrumTuning={this.changeKickDrumTuning} />
        <CongaTuningKnob changeCongaTuning={this.changeCongaTuning} />
      </div>
    );
  }
}

export default App;
