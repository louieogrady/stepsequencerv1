import React, { Component } from 'react';
// import Tone from 'tone';

import '../App.css';

import Hihat from './Hihat.js';
import Snare from './Snare.js';
import Cell from './Cell.js';


class App extends Component {

  render() {
    let cells = [];
    for (let i = 0; i < 15; i++) {
      cells.push(<Cell />)
    }

  return (
    <div className="App">

        <Hihat />
        <Snare />

        <div class="grid">
        <div class="row">{cells}</div>
        <div class="row">{cells}</div>
        <div class="row">{cells}</div>
        <div class="row">{cells}</div>
        <div class="row">{cells}</div>
        <div class="row">{cells}</div>
        </div>

        </div>
      )
    }
  }




export default App;
