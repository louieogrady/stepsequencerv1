import React from "react";
import { Knob } from "react-rotary-knob";
import Aux from './Aux'
import * as skins from "react-rotary-knob-skin-pack";

class CongaTuningKnob extends React.Component {
  state = {
    value: 107
  };

  handleChange = value => {

    const maxDistance = 200;
    let distance = Math.abs(value - this.state.value);
    if (distance > maxDistance) {
      return;
    } else {
      this.setState({
        value: value
      });
    }

    this.props.changeCongaTuning(value);
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
          min={80}
          max={400}
          value={this.state.value}
          unlockDistance={0}
          preciseMode={false}
          skin={skins.s7}
          {...this.props.rest}
        />{" "}
        <h5 style={{marginTop: "0rem", marginLeft: "0.35rem", width: "80px"}}>Tuning (Hz)</h5>
      </Aux>
    );
  }
}

export default CongaTuningKnob;
