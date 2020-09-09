import React, { Component } from "react";
import ClickOutside from "./ClickOutside";

let style = {
    fontSize: "14px",
    margin: '0 auto',
    fontFamily: 'Lato',
    border: "solid black 1px",
    padding: '30px 5% 50px',   
    textAlign: 'center'
}

let titleStyle = {
    textAlign: 'center',
    fontFamily: 'Lato',
    color: "black",
}



class InfoPopUp extends Component {
    infoHandleClick = (e) => {
        if (e.target.classList.contains("info-button")) {
            return
        } else {
            this.props.showInfoPopup();
        }
    }
    render() {

        return (
            <React.Fragment >
                <ClickOutside onClick={e => this.infoHandleClick(e)}>
                    <div style={style} className="show-info">
                        <h1 style={titleStyle}>Rhythm Composer</h1>
                        <p className="text"> Rhythm Composer is a browser-based drum machine / 16 step sequencer. Users can play, create, edit and add effects to drum patterns in real-time.
                        Created with React, each drum sound is synthesised with the Tone.js framework.
                    <br></br><br></br>
                    The grid represents a traditional 4/4 measure with each step representing 1/16 of that measure. Downbeats are represented by the orange boxes.
                    Each row of the grid has been assigned a drum sound which is shown by the icons on the left-hand side of the grid.
                    Each of these drum sounds have an exclusive effect, pitch or envelope control, the values of which can be adjusted using the knobs on the right-hand side of each row.
                    <br></br><br></br>
                    Drum patterns can be entered by the user by clicking on the boxes in the grid. Once clicked, the box will turn blue which shows it is activated and will be triggered at that given time in the measure.
                    <br></br><br></br>
                    When the user presses play, the loop starts and the current position will be shown by the orange outline which will be moving across the grid. The randomize button will create a random pattern. Users can edit parameters and patterns in real-time.
                    <br></br><br></br>
                    I recommend using Rhythm Composer on a desktop computer, many features have been removed when accessing the site on a mobile phone.
                    <br></br><br></br>
                    By <a href='https://github.com/louieogrady'>Louie O'Grady.</a>
                    </p>
                    </div>
                </ClickOutside>
            </React.Fragment>
        );

    }
}

export default InfoPopUp
