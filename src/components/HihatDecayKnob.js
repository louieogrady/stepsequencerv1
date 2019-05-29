import React from "react";
import { Knob } from "react-rotary-knob";
import Aux from './Aux'
import * as skins from "react-rotary-knob-skin-pack";

class HihatDecayKnob extends React.Component {
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

    this.props.changeCymbalDecayLevel(value);
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
          min={0.25}
          max={1.5}
          value={this.state.value}
          unlockDistance={0}
          preciseMode={false}
          skin={skins.s7}
          {...this.props.rest}
        />{" "}
        <h5 style={{marginTop: "-0.3rem", marginLeft: "1.3rem"}}>Attack</h5>
      </Aux>
    );
  }
}

export default HihatDecayKnob;
