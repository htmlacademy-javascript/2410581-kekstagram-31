import {preview, sliderContainer, sliderValue} from '../../variables';
import {changeSlider} from './change-slider';
import {changeStyle} from './change-style';
import {filters} from '../../../settings';

let valueProperty = '';
let styleProperty = '';

const onPreviewChangeStyle = (evt) => {
  sliderContainer.classList.remove('hidden');

  valueProperty = '';
  preview.style.removeProperty('filter');
  const currentEffect = evt.target.id;

  if ([currentEffect] in filters) {
    const effectSetting = filters[currentEffect];
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

export {valueProperty, styleProperty, onPreviewChangeStyle};
