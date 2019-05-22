import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class ClapReverbKnob extends React.Component {
  state = {
    value: 0
  };

  handleChange = value => {

    const maxDistance = 0.5;
    let distance = Math.abs(value - this.state.value);
    if (distance > maxDistance) {
      return;
    } else {
      this.setState({
        value: value
      });
    }

    this.props.changeClapReverbLevel(value);
  };

  render() {
    return (
      <div>
        <Knob
          style={{
            position: "absolute",
            width: "50px",
            marginTop: "-3.3rem",
            marginLeft: "94.2rem",
            height: "50px",
            display: "inline-block"
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={0}
          max={1}
          value={this.state.value}
          unlockDistance={30}
          preciseMode={false}
          skin={skins.s7}
          {...this.props.rest}
        />{" "}
        <h5 style={{ marginLeft: "94.7rem", marginTop: "-05.2rem" }}>Reverb</h5>
      </div>
    );
  }
}

export default ClapReverbKnob;
