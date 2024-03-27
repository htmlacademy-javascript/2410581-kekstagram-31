import {bigPicture} from '../variables.js';
import {isEscapeKey, isFieldFocused} from './checks.js';
import {onButtonCloseModal} from '../close-modal.js';
import {uploadOverlay} from '../../download-modal/variables.js';
import {onButtonCloseUploadModal} from '../../download-modal/utils/on-button-close-load-modal.js';
import {pristine} from '../../download-modal/utils/check-form.js';
import {onButtonCloseMessage} from '../../errors/get-upload-message.js';

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    const buttonSuccessClose = document.querySelector('.success');
    const buttonErrorClose = document.querySelector('.error');

    if (buttonSuccessClose) {
      buttonSuccessClose.removeEventListener('click', onButtonCloseMessage);
      buttonSuccessClose.remove();
    }
    if (buttonErrorClose) {
      evt.stopPropagation();
      buttonErrorClose.removeEventListener('click', onButtonCloseMessage);
      buttonErrorClose.remove();
    } else {
      if (uploadOverlay.classList.contains('hidden') && !(buttonErrorClose)) {
        bigPicture.classList.add('hidden');
        onButtonCloseModal();
      } else {
        if (isFieldFocused()) {
          evt.stopPropagation();
        } else {
          pristine.reset();
          onButtonCloseUploadModal();
        }
      }
    }
  }
};

export {onDocumentKeyDown};
