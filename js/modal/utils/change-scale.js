import {settings} from '../../settings.js';
import { preview, scaleControlValue } from '../../variables.js';

const onButtonChangeScale = (evt) => {
  if (evt.target.className === 'scale__control  scale__control--smaller' && parseInt(scaleControlValue.value, 10) !== settings.MIN_SCALE) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) - settings.STEP_SCALE}%`;
    preview.style.transform = `scale(${parseInt(scaleControlValue.value, 10) / 100})`;
  }
  if (evt.target.className === 'scale__control  scale__control--bigger' && parseInt(scaleControlValue.value, 10) !== settings.MAX_SCALE) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + settings.STEP_SCALE}%`;
    preview.style.transform = `scale(${parseInt(scaleControlValue.value, 10) / 100})`;
  }
};

export {onButtonChangeScale};
