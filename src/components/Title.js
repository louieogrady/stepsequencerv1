import React, { Component } from "react";
import ClickOutside from "./ClickOutside";

  let style = {
    fontSize: "3.7vw",
    marginTop: "0.6rem",
    marginLeft: "23%",
    fontFamily: 'Lato',
    color: "#F7F5E1",
    border: "black",
    // textShadow: "3px 0 black, 0 0px black, 5px 0 black, 0 2px black",
    position: "relative",
    width: "100%"
  }

class Title extends Component {

  infoHandleClick = () => {
      this.props.showInfoPopup();
  }

  refHandleClick = () => {
    this.props.showFreqPopup();
  }

  render() {

    return (
      <React.Fragment>
        <h1 style={style}> Rhythm Composer </h1>
            <button className="info-button" onClick={this.infoHandleClick}>About</button>
          {/* <button className={['info-button', 'ref'].join(' ')} onClick={this.refHandleClick}>Freq. Ref</button> */}
      </React.Fragment> 
    );
    
  }
}

export default Title
