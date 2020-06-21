import React, { Component } from "react";

let style = {
    fontSize: "14px",
    width: '600px',
    margin: '0 auto',
    fontFamily: 'Lato',
    border: "solid black 1px",
    padding: '30px 70px 50px'
}

let titleStyle = {
    fontSize: "20px",
    textAlign: 'center',
    fontFamily: 'Lato',
    color: "black",
  }

class InfoPopUp extends Component {
    render() {

        return (
            <React.Fragment >
                <div style={style} className="show-info">
                    <h1 style={titleStyle}>Rhythm Composer</h1> 
                    <p className="text"> Rhythm Composer is a browser-based drum machine / 16 step sequencer. Users can play, create, edit and add effects to drum patterns in real-time.
                    Created with React, each drum sound is synthesised with the Tone.js framework.
                    <br></br><br></br>
                    The grid represents a traditional 4/4 measure with each step representing 1/16 of that measure. Downbeats are represented by the red boxes.
                    Each row of the grid has been assigned a drum sound which is shown by the icons on the left-hand side of the grid.
                    Each of these drum sounds have an exclusive effect, pitch or envelope control, the values of which can be adjusted using the knobs on the right-hand side of each row.
                    <br></br><br></br>
                    Drum patterns can be entered by the user by clicking on the boxes in the grid. Once clicked, the box will turn blue which shows it is activated and will be triggered at that given time in the measure.
                    <br></br><br></br>
                    When the user presses play, the loop starts and the current position will be shown by the yellow outline which will be moving across the grid. The randomize button will create a random pattern. Users can edit parameters and patterns in real-time.
                    <br></br><br></br>
                    Rhythm Composer was made by Louie O'Grady.
                    </p>
                    
                </div>
            </React.Fragment>
        );

    }
}

export default InfoPopUp
