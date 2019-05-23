import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class VolumeSlider extends React.Component {
  state = {
    value: -3
  };

  handleChange = value => {
    const maxDistance = 5;
    let distance = Math.abs(value - this.state.value);

    if (distance > maxDistance) {
      return;
    } else {
      this.setState({
        value: value
      });
    }

    this.props.changeVolume(value);
  };

  render() {
    return (
      <div>
        <Knob
          style={{
            position: "relative",
            width: "60px",


            height: "60px",

          }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={-12}
          max={0}
          value={this.state.value}
          unlockDistance={30}
          preciseMode={false}
          skin={skins.s8}
          {...this.props.rest}
        />{" "}
        <h5>Volume (dB)</h5>
      </div>
    );
  }
}

export default VolumeSlider;
