import {valueProperty, styleProperty} from './on-preview-change-style';
import {sliderValue, preview} from '../../variables';

const changeStyle = () => {
  preview.style.filter = `${styleProperty}(${sliderValue.value}${valueProperty})`;
};

export {changeStyle};
