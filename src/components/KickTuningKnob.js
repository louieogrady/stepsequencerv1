import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class KickTuningKnob extends React.Component {
  state = {
    value: 44
  };

  handleChange = value => {

    const maxDistance = 40;
    let distance = Math.abs(value - this.state.value);
    if (distance > maxDistance) {
      return;
    } else {
      this.setState({
        value: value
      });
    }

    this.props.changeKickDrumTuning(value);
  };

  render() {
    return (
      <div>
        <Knob
          style={{
            position: "absolute",
            width: "50px",
            marginTop: "-3.3rem",
            marginLeft: "94.5rem",
            height: "50px",
            display: "inline-block"
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={44}
          max={100}
          value={this.state.value}
          unlockDistance={30}
          preciseMode={false}
          skin={skins.s7}
          {...this.props.rest}
        />{" "}
        <h5 style={{ marginLeft: "94.2rem", marginTop: "-17rem" }}>Tuning (Hz)</h5>
      </div>
    );
  }
}

export default KickTuningKnob;
