import {preview, rangeSlider, sliderValue} from '../variables.js';
import {valueProperty, styleProperty, changeStyle} from '../modal/utils/on-preview-change-style.js';

const getNoUiSlider = () => {
  noUiSlider.create(rangeSlider, {
    range: {
      min: 0,
      max: 0
    },
    start: 0,
    step: 0,
    connect: 'lower',
    format: {
      to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value),
    }
  });

  rangeSlider.noUiSlider.on('update', () => {
    sliderValue.value = rangeSlider.noUiSlider.get();
    changeStyle(preview, styleProperty, valueProperty, sliderValue.value);
  });
};

export {getNoUiSlider};
