import React from "react";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Slider, { defaultValueReducer } from '@material-ui/lab/Slider';
// import Typography from '@material-ui/core/Typography';
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
            position: "absolute",
            width: "60px",
            marginTop: "-4.35rem",
            marginLeft: "67.9rem",
            height: "60px",
            display: "inline-block"
          }}
          onChange={value => {
            this.handleChange(value);
          }}
          min={10}
          defaultValue={120}
          max={200}
          value={this.state.value}
          unlockDistance={30}
          preciseMode={false}
          skin={skins.s8}
          {...this.props.rest}
        />
        <h5 style={{ marginLeft: "67.2rem", marginTop: "-0.1rem"}}>Tempo (BPM)</h5>
      </div>
    );
  }
}

export default BpmSlider;
