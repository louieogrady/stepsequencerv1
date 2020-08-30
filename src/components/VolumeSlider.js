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
  };

  onEnd = () => {
    this.props.changeVolume(this.state.value);
  }

  render() {
    return (
      <React.Fragment>
        <Knob
          style={{
            width: '7vw',
            position: 'relative'
          }}
          onEnd={() => {
            this.onEnd();
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          className="bottom-slider"
          min={-12}
          max={0}
          value={Math.floor(this.state.value) === -1 ? 0 : this.state.value}
          unlockDistance={0}
          preciseMode={false}
          skin={skins.s4}
          {...this.props.rest}
        />{" "}
        <h5 className="volume-slider" style={{ margin: "0rem", marginLeft: "0.2rem"}}>Volume (dB)</h5>
      </React.Fragment>
    );
  }
}

export default VolumeSlider;
