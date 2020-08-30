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
  };

  onEnd = () => {
    this.props.changeSwing(this.state.value);
  }

  render() {
    return (
      <React.Fragment>
        <Knob
          style={{
            width: '7vw',
            position: 'relative'
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          onEnd={() => {
            this.onEnd();
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
      <h5 className="swing-slider" >Swing</h5>
      </React.Fragment>
    );
  }
}

export default SwingSlider;
