import {settings} from '../../../settings';
import {submitButton} from '../../variables.js';

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = settings.SENDING;
};

export {blockSubmitButton};
