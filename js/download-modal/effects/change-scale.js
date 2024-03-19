import {scaleControlValue, preview} from '../variables';

const onButtonChangeScale = (evt) => {
  if (evt.target.className === 'scale__control  scale__control--smaller' && parseInt(scaleControlValue.value, 10) !== 25) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) - 25}%`;
    preview.style.scale = parseInt(scaleControlValue.value, 10) / 100;
  }
  if (evt.target.className === 'scale__control  scale__control--bigger' && parseInt(scaleControlValue.value, 10) !== 100) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + 25}%`;
    preview.style.scale = parseInt(scaleControlValue.value, 10) / 100;
  }
};

export {onButtonChangeScale};
