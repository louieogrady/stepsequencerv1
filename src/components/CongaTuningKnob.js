import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class CongaTuningKnob extends React.Component {
  state = {
    value: 220
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
            position: "absolute",
            width: "50px",
            marginTop: "-3.5rem",
            marginLeft: "95.4rem",
            height: "50px",
            display: "inline-block"
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
        <h5 style={{ marginLeft: "94.8rem", marginTop: "24.5rem" }}>Tuning (Hz)</h5>
      </div>
    );
  }
}

export default CongaTuningKnob;
