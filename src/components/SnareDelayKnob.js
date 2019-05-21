import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class SnareDelayKnob extends React.Component {
  state = {
    value: 0
  };

  handleChange = value => {

    const maxDistance = 2.5;
    let distance = Math.abs(value - this.state.value);
    if (distance > maxDistance) {
      return;
    } else {
      this.setState({
        value: value
      });
    }

    this.props.changePingPongDelayLevel(value);
  };

  render() {
    return (
      <div>
        <Knob
          style={{
            position: "absolute",
            width: "60px",
            marginTop: "-4rem",
            marginLeft: "95.2rem",
            height: "60px",
            display: "inline-block"
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={0}
          max={10}
          value={this.state.value}
          unlockDistance={30}
          preciseMode={false}
          skin={skins.s8}
          {...this.props.rest}
        />{" "}
        <h5 style={{ marginLeft: "96rem", marginTop: "-17.1rem" }}>Delay</h5>
      </div>
    );
  }
}

export default SnareDelayKnob;
