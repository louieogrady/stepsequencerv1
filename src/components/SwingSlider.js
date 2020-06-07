import React from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class SwingSlider extends React.Component {

  state = {
    value: 0
  };

  handleChange = value => {
    const maxDistance = 0.125;
    let distance = Math.abs(value - this.state.value);

    if (distance > maxDistance) {
      return;
    } else {
      this.setState({
        value: value
      });
    }

    this.props.changeSwing(value);
  };

  render() {
    return (
      <React.Fragment>
        <Knob
          style={{
            width: '7vw',
            height: "80px",
            position: 'relative'
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          className="bottom-slider"
          min={0}
          max={0.25}
          value={this.state.value}
          unlockDistance={0}
          preciseMode={false}
          skin={skins.s4}
          {...this.props.rest}
        />
      <h5 style={{left: '80%'}} >Swing</h5>
      </React.Fragment>
    );
  }
}

export default SwingSlider;
