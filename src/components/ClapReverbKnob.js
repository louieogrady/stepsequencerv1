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
            width: "50px",
            height: "50px",
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
        />
        <h5 style={{marginTop: "0rem", marginLeft: "0.27rem"}}>Reverb</h5>
      </div>
    );
  }
}

export default ClapReverbKnob;
