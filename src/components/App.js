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

  stepToggle = (id) => {
    console.log(`You Clicked ${id}`)
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

  render() {
    let cells = [];
    for (let i = 0; i < 16; i++) {
      cells.push(<Cell stepToggle={this.stepToggle} buttonToggle={this.state.buttonToggle} key={i} id={i}/>)
    }

    return (
      <div className="App">


        <Snare />

        <div className="grid">
        <div className="row">{cells}</div>
        <div className="row">{cells}</div>
        <div className="row">{cells}</div>
        <div className="row">{cells}</div>
        <div className="row">{cells}</div>
        <div className="row">{cells}</div>
        </div>

        <PlayPause />

        <ClearPattern clearPattern={this.clearPattern} />

      </div>
      )

    }

  }




export default App;
