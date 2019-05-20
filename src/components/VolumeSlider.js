import React from "react";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Slider, { defaultValueReducer } from '@material-ui/lab/Slider';
// import Typography from '@material-ui/core/Typography';
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";

class VolumeSlider extends React.Component {
  state = {
    value: 7
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
            position: "absolute",
            width: "60px",
            marginTop: "-4.1rem",
            marginLeft: "50.59rem",
            height: "60px",
            display: "inline"
            // display: "inline-block"
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
        <h5 style={{ marginLeft: "51rem", marginTop: "-1.24rem" }}>Volume </h5>
      </div>
    );
  }
}

export default VolumeSlider;

//
//
//
//
// const style = {
//   margin: "27rem 50rem 1000rem"
// }
//
// const styles = {
//   root: {
//     width: 160,
//   },
// }
//
// /**
//  * a value reducer that will snap to multiple of 10 but also to the edge value
//  * Useful here because the max=104 is not a multiple of 10
//  */
// function valueReducer(rawValue, props, event) {
//   const { disabled, max, min, step } = props;
//
//   function roundToStep(number) {
//     return Math.round(number / step) * step;
//   }
//
//   if (!disabled && step) {
//     if (rawValue > min && rawValue < max) {
//       if (rawValue === max - step) {
//         // If moving the Slider using arrow keys and value is formerly an maximum edge value
//         return roundToStep(rawValue + step / 2);
//       }
//       if (rawValue === min + step) {
//         // Same for minimum edge value
//         return roundToStep(rawValue - step / 2);
//       }
//       return roundToStep(rawValue);
//     }
//     return rawValue;
//   }
//
//   return defaultValueReducer(rawValue, props, event);
// }
//
// /**
//  * this slider has a max that is not a multiple of its step. We use a custom
//  * `valueReducer` to adjust the given values
//  */
// class VolumeSlider extends React.Component {
//
//   state = {
//     value: 0,
//   };
//
//   handleChange = (event, value) => {
//
//     this.setState({
//       value: value
//     })
//
//     this.props.changeVolume(value)
//   };
//
//
//
//   render() {
//     const { classes } = this.props;
//     const { value } = this.state;
//
//     return (
//       <div className={classes.root} style={style}>
//       <Typography id="label">Volume</Typography>
//         <Slider
//
//           value={value}
//           name={"volume"}
//           valueReducer={valueReducer}
//           min={-35}
//           max={0}
//           step={1}
//           onChange={this.handleChange}
//         />
//       </div>
//     );
//   }
// }
//
// VolumeSlider.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(VolumeSlider);
