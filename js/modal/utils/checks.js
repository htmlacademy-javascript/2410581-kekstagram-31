import { hashtags, textDescription } from '../../variables.js';

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';
const isFieldFocused = () => document.activeElement === hashtags || document.activeElement === textDescription;

export {isEscapeKey, isEnterKey, isFieldFocused};
