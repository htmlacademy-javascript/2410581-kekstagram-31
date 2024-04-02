import {settings} from '../../settings';
import {submitButton} from '../../variables';

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = settings.IDLE;
};

export {unblockSubmitButton};
