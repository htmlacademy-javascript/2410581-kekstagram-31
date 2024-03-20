import {preview, sliderValue, rangeSlider} from '../variables';
import {changeStyle} from './utils/change-style';
import {valueProperty, styleProperty} from './utils/on-preview-change-style';

const getNoUiSlider = () => {
  noUiSlider.create(rangeSlider, {
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1,
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
