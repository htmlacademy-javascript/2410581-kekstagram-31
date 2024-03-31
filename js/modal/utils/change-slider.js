import {rangeSlider} from '../../variables.js';

const changeSlider = (min, max, step) => rangeSlider.noUiSlider.updateOptions({
  range: {
    min: min,
    max: max,
  },
  start: max,
  step: step,
});

export {changeSlider};
