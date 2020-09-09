import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class KickTuningKnob extends React.Component {
  state = {
    value: this.props.value | 44
  };

  handleChange = value => {

    const maxDistance = 40;
    let distance = Math.abs(value - this.state.value);
    if (distance > maxDistance) {
      return;
    } else {
      this.setState({
        value: value
      });
    }

  };

  onEnd = () => {
    this.props.changeKickDrumTuning(this.state.value, true);
  }

  render() {
    return (
      <React.Fragment>
        <Knob
          className="whindUp"
          style={{
            width: "auto",
            height: "auto",
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          onEnd={() => {
            this.onEnd();
          }}
          min={44}
          max={100}
          value={this.state.value}
          unlockDistance={0}
          preciseMode={false}
          skin={skins.s7}
          {...this.props.rest}
        />{" "}
        <h5 style={{
          // marginTop: "0rem",
        }}>Tuning</h5>
      </React.Fragment>
    );
  }
}

export default KickTuningKnob;
