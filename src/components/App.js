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
    buttonToggle: false,
     steps:
     [
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
     ]
  }

  stepToggle = (x, y) => {
     console.log(`You Clicked ${x} and ${y}`)
    this.setState({
      buttonToggle: !this.state.buttonToggle
    })
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
  //
  // genRow = (row) => {
  //   return row.map(cell => <Cell )
  // }
  //
  // genMatrix = () => {
  //   return this.state.steps.map(this.genRow)
  // }

  render() {
    let cells = this.state.steps.map((row, yCoord) => {
      return <div className="row">{row.map((cell, xCoord) => <Cell stepToggle={this.stepToggle} x={xCoord} y={yCoord}/>)}</div>
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
