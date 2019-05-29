import React from "react";
import { Knob } from "react-rotary-knob";
import Aux from './Aux'
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
      <Aux>
        <Knob
          style={{
            width: "30px",
            height: "30px",
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={44}
          max={100}
          value={this.state.value}
          unlockDistance={0}
          preciseMode={false}
          skin={skins.s7}
          {...this.props.rest}
        />{" "}
        <h5 style={{marginTop: "0rem", marginLeft: "0.269rem", width: "81px"}}>Tuning (Hz)</h5>
      </Aux>
    );
  }
}

export default KickTuningKnob;
