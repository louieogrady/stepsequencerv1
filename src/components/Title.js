import React, { Component } from "react";

class Title extends Component {
  state = {
    urlText: 'Copy URL'
  }
  infoHandleClick = () => {
    this.props.showInfoPopup();
  }
  refHandleClick = () => {
    this.props.showFreqPopup();
  }
  copyUrl = () => {
    this.setState({
      urlText: 'URL Copied!'
    })
    let dummy = document.createElement('input'), text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    setTimeout(() => {
      this.setState({
        urlText: 'Copy URL'
      })
    }, 15500)
  }
  render() {
    let urlClassName = this.state.urlText === 'Copy URL' ? 'copy-url-button' : 'copy-url-button blue'
    return (
      <React.Fragment>
        <h1> Rhythm Composer </h1>
        <button className="info-button" onClick={this.infoHandleClick}>About</button>
        <button className={urlClassName} onClick={this.copyUrl}>{this.state.urlText}</button>
      </React.Fragment>
    );
  }
}

export default Title
