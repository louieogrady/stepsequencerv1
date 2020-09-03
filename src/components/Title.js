import React, { Component } from "react";

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
        <h1> Rhythm Composer </h1>
            <button className="info-button" onClick={this.infoHandleClick}>About</button>
          {/* <button className={['info-button', 'ref'].join(' ')} onClick={this.refHandleClick}>Freq. Ref</button> */}
      </React.Fragment> 
    );
    
  }
}

export default Title
