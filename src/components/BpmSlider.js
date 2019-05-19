import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider, { defaultValueReducer } from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

const style = {
  margin: "38rem"
}

const styles = {
  root: {
    width: 160,
  },
}


/**
 * a value reducer that will snap to multiple of 10 but also to the edge value
 * Useful here because the max=104 is not a multiple of 10
 */
function valueReducer(rawValue, props, event) {
  const { disabled, max, min, step } = props;

  function roundToStep(number) {
    return Math.round(number / step) * step;
  }

  if (!disabled && step) {
    if (rawValue > min && rawValue < max) {
      if (rawValue === max - step) {
        // If moving the Slider using arrow keys and value is formerly an maximum edge value
        return roundToStep(rawValue + step / 2);
      }
      if (rawValue === min + step) {
        // Same for minimum edge value
        return roundToStep(rawValue - step / 2);
      }
      return roundToStep(rawValue);
    }
    return rawValue;
  }

  return defaultValueReducer(rawValue, props, event);
}

/**
 * this slider has a max that is not a multiple of its step. We use a custom
 * `valueReducer` to adjust the given values
 */
class BpmSlider extends React.Component {
  state = {
    value: 120,
  };

  handleChange = (event, value) => {

    this.setState({
      value: value
    })

    this.props.changeBpm(value)
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root} style={style}     >
      <Typography id="label">Tempo: {value} bpm</Typography>
        <Slider
          value={value}
          valueReducer={valueReducer}
          min={10}
          max={200}
          step={1}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

BpmSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BpmSlider);
