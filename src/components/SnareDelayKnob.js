import React from "react";
import {Knob} from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class SnareDelayKnob extends React.Component {
  state = {
    value: this.props.value
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        value: this.props.value
      });
    }
  }
  handleChange = value => {

    const maxDistance = 2;
    let distance = Math.abs(value - this.state.value);
    if (distance > maxDistance) {
      return;
    } else {
      this.setState({value: value});
    }
  };

  onEnd = () => {
    this.props.changePingPongDelayLevel(this.state.value, true);
  }

  render() {
    return (<React.Fragment>
      <Knob className="whindUp" style={{
          width: "auto",
          height: "auto"
        }} 
        onChange={value => {
          this.handleChange(value);
        }} 
        onEnd={() => {
          this.onEnd()
        }}
        min={0} 
        max={4} 
        value={this.state.value} 
        unlockDistance={0} 
        preciseMode={false} 
        skin={skins.s7} {...this.props.rest}/>{" "}
      <h5 style={{
          // marginTop: "-0rem",
        }}>Delay</h5>
    </React.Fragment>);
  }
}

export default SnareDelayKnob;
