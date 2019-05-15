import React, { Component } from 'react';

//import Tone from 'tone';

import '../App.css';

import Hihat from './Hihat.js';
import Snare from './Snare.js';
import Cell from './Cell.js';
import PlayPause from './PlayPause.js'
import ClearPattern from './ClearPattern.js'


class App extends Component {

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
     bpm: 120
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

    debugger

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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    })
  }

  render() {
    debugger
    let cells = this.state.steps.map((row, xCoord) => {
      return <div className="row">{row.map((cell, yCoord) => <Cell stepToggle={this.stepToggle} x={xCoord} y={yCoord} />) }</div>
    })

    // let cells = [];
    // for (let i = 0; i < 16; i++) {
    //   cells.push(<Cell stepToggle={this.stepToggle} buttonToggle={this.state.buttonToggle} key={i} id={i} steps={this.state.steps}/>)
    // }

    return (
      <div className="App">


        <Snare />

        <div className="grid">
          {cells}
        </div>

        <PlayPause />

        <ClearPattern clearPattern={this.clearPattern} />

      </div>
      )

    }

  }




export default App;
