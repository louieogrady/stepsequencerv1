import React from "react";
import { Knob } from "react-rotary-knob";
import Aux from './Aux'
import * as skins from "react-rotary-knob-skin-pack";

class ClapReverbKnob extends React.Component {
  state = {
    value: 0
  };

  handleChange = value => {

    const maxDistance = 0.2;
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
      <Aux>
        <Knob
        style={{
          width: "30px",
          height: "30px",
        }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={0}
          max={0.4}
          value={this.state.value}
          unlockDistance={0}
          preciseMode={false}
          skin={skins.s7}
          {...this.props.rest}
        />
        <h5 style={{marginTop: "0rem", marginLeft: "1.2rem"}}>Reverb</h5>
      </Aux>
    );
  }
}

export default ClapReverbKnob;
