import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class BpmSlider extends React.Component {
  state = {
    value: 120
  };

  handleChange = value => {
    const maxDistance = 100;
    let distance = Math.abs(value - this.state.value);

    if (distance > maxDistance) {
      return;
    } else {
      this.setState({
        value: value
      });
    }

    this.props.changeBpm(value);
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
          min={10}
          defaultValue={120}
          max={200}
          value={this.state.value}
          unlockDistance={0}
          preciseMode={false}
          skin={skins.s8}
          {...this.props.rest}
        />
        <h5 style={{marginTop: "0rem", marginLeft: "0.1rem", width: "90px"}}>Tempo (BPM)</h5>
      </div>
    );
  }
}

export default BpmSlider;
