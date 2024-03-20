import {addAllPictures} from './photo-generation.js';
import {makeEventClick} from './modal/index.js';

addAllPictures();
makeEventClick();

const rangeSlider = document.getElementById('slider-range');
noUiSlider.create(rangeSlider, {
  start: [4000],
  range: {
    min: [2000],
    max: [10000]
  }
});
