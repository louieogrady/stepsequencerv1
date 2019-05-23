import React from "react";
import { Knob } from "react-rotary-knob";
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
      <div>
        <Knob
          style={{
            width: "80px",
            height: "80px",
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={80}
          max={400}
          value={this.state.value}
          unlockDistance={30}
          preciseMode={false}
          skin={skins.s7}
          {...this.props.rest}
        />{" "}
        <h5 style={{marginTop: "0rem", marginLeft: "0.35rem", width: "80px"}}>Tuning (Hz)</h5>
      </div>
    );
  }
}

export default CongaTuningKnob;
