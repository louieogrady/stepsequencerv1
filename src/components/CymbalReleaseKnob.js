import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class CymbalReleaseKnob extends React.Component {
  state = {
    value: 0.25
  };

  handleChange = value => {

    const maxDistance = 1;
    let distance = Math.abs(value - this.state.value);
    if (distance > maxDistance) {
      return;
    } else {
      this.setState({
        value: value
      });
    }

    this.props.changeCymbalReleaseLevel(value);
  };

  render() {
    return (
      <div>
        <Knob
          style={{
            width: "80px",
            height: "80px",
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={0.25}
          max={2}
          value={this.state.value}
          unlockDistance={30}
          preciseMode={true}
          skin={skins.s7}
          {...this.props.rest}
        />{" "}
        <h5 style={{marginTop: "-0.3rem", marginLeft: "1.1rem"}}>Release</h5>
      </div>
    );
  }
}

export default CymbalReleaseKnob;
