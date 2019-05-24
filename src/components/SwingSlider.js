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
      <div className='swing-slider'>
        <Knob
          style={{
            width: "80px",
            height: "80px",
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={0}
          max={0.25}
          value={this.state.value}
          unlockDistance={30}
          preciseMode={true}
          skin={skins.s8}
          {...this.props.rest}
        />
        <h5 style={{ margin: "0rem", marginLeft: "1.4rem"}}>Swing</h5>
      </div>
    );
  }
}

export default SwingSlider;
