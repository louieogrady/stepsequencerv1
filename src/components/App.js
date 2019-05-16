import React, { Component } from 'react';
import * as Tone from 'tone';

import '../App.css';

import Hihat from './Hihat.js';
import Snare from './Snare.js';
import Cell from './Cell.js';
import PlayPause from './PlayPause.js'
import ClearPattern from './ClearPattern.js'

class App extends Component {

  synth = new Tone.MonoSynth().toMaster()

  state = {
     steps:
     [
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
     ],
     bpm: 120,
     playing: Tone.Transport.state,  // returns the playback state of Transport, either “started”, “stopped”, or “paused”
     notes: [
       "C#2",
       "D#3",
       "F#2",
       "G#1",
       "A#2",
       "C#1",
       "D#3",
       "F#2"
     ].reverse(),
     playState: Tone.Transport.state
  }

  triggerDrumSynth = () => {
  const drumSynth = new Tone.MembraneSynth().toMaster();
  drumSynth.triggerAttackRelease("c1", "8n");
}

componentDidMount() {

  this.loop = new Tone.Sequence(
    (time, col) => {
      debugger
      this.state.steps.map((row, noteIndex) => {
        if (row[col]) {
          // Trigger the sound to be played here
          this.synth.triggerAttackRelease(this.state.notes[noteIndex], "8n", time)
        }
      })
    },
    this.state.steps[0], // defines the parts of the sequence, lets use first row of the steps
    "16n"
  )

}


  // componentWillMount() {
  //   this.loop.dispose()
  // }

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



  drummer(time) {
    const drumSynth = new Tone.MembraneSynth().toMaster();
    // const triggerDrumSynth = drumSynth.triggerAttackRelease("c1", "8n", time);
    // const triggerDrumSynth2 = drumSynth2.triggerAttackRelease("e2", "16n", time);

    // let loopBeat = new Loop(this.triggerDrumSynth, "4n", time);
    //
    // let loopBeat2 = new Loop(this.triggerDrumSynth2, "8n", time)
    // Transport.loop = '4'
    // Transport.loopStart = '0'
    // Transport.loopEnd = '1m'
    //
    // // Transport.start();
    // //
    // //
    // // // loopBeat.start(0);
    // // // loopBeat2.start(0);
    console.log(time)


    debugger
  }

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



  pause = () => {
    Tone.Transport.stop();
  }

  toggle = () => {
    Tone.Transport.start()

  }

  play = () => {

    Tone.Transport.bpm.value = this.state.bpm
    Tone.Transport.start();

    this.setState({
      playState: Tone.Transport.State
    })
debugger
    console.log('transport started')
  }


  stepToggle = (x, y) => {

    if (this.state.steps[x][y] === 0) {
      const newSteps = this.state.steps
      newSteps[x][y] = 1
      this.setState({steps: newSteps})
    } else {
      const newSteps = this.state.steps
      newSteps[x][y] = 0
      this.setState({steps: newSteps})
    }

    console.log(`You Clicked ${x} and ${y}`)
  }

  clearPattern = () => {
    console.log('You cleared the pattern')
    this.setState({
      steps:
      [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    })

  }



  render() {

    let cells = this.state.steps.map((row, xCoord) => {
      return <div className="row">{row.map((cell, yCoord) => <Cell stepToggle={this.stepToggle} x={xCoord} y={yCoord} />) }</div>
    })

    // let cells = [];
    // for (let i = 0; i < 16; i++) {
    //   cells.push(<Cell stepToggle={this.stepToggle} buttonToggle={this.state.buttonToggle} key={i} id={i} steps={this.state.steps}/>)
    // }

    return (
      <div className="App">

        <div className="grid">
          {cells}
        </div>

        <Snare />

        <PlayPause play={this.play} pause={this.pause}  playState={this.playState}/>

        <ClearPattern clearPattern={this.clearPattern} />

        <button onClick={this.testHandleClick}> test click </button>

      </div>
      )

    }

  }




export default App;
