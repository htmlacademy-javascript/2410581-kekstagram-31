import {changeSlider} from './change-slider.js';
import {sliders} from '../../settings.js';
import {preview, sliderContainer, sliderValue} from '../../variables.js';

let valueProperty = '';
let styleProperty = '';

const changeStyle = () => {
  preview.style.filter = `${styleProperty}(${sliderValue.value}${valueProperty})`;
};

const onPreviewChangeStyle = (evt) => {
  sliderContainer.classList.remove('hidden');

  valueProperty = '';
  preview.style.removeProperty('filter');
  const currentEffect = evt.target.id;

  if ([currentEffect] in sliders) {
    const effectSetting = sliders[currentEffect];
    const sliderValues = effectSetting.sliderValues;

    changeSlider(sliderValues[0], sliderValues[1], sliderValues[2]);
    styleProperty = effectSetting.styleProperty;
    valueProperty = effectSetting.valueProperty;
    changeStyle();
  }
  if (currentEffect === 'effect-none') {
    sliderContainer.classList.add('hidden');
    sliderValue.value = '';
  }

};

export {valueProperty, styleProperty, onPreviewChangeStyle, changeStyle};
