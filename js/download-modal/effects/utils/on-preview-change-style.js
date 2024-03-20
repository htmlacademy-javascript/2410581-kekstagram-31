import {preview, sliderContainer, sliderValue} from '../../variables';
import {changeSlider} from './change-slider';
import {changeStyle} from './change-style';

let valueProperty = '';
let styleProperty = '';

const onPreviewChangeStyle = (evt) => {
  sliderContainer.classList.remove('hidden');
  valueProperty = '';
  preview.style.removeProperty('filter');
  switch (evt.target.id) {
    case 'effect-chrome':
      changeSlider(0, 1, 0.1);
      styleProperty = 'grayscale';
      changeStyle();
      break;
    case 'effect-sepia':
      changeSlider(0, 1, 0.1);
      styleProperty = 'sepia';
      changeStyle();
      break;
    case 'effect-marvin':
      changeSlider(0, 100, 1);
      styleProperty = 'invert';
      valueProperty = '%';
      changeStyle();
      break;
    case 'effect-phobos':
      changeSlider(0, 3, 0.1);
      styleProperty = 'blur';
      valueProperty = 'px';
      changeStyle();
      break;
    case 'effect-heat':
      styleProperty = 'brightness';
      changeSlider(1, 3, 0.1);
      changeStyle();
      break;
    case 'effect-none':
      sliderContainer.classList.add('hidden');
      sliderValue.value = '';
      break;
  }
};

export {valueProperty, styleProperty, onPreviewChangeStyle};
