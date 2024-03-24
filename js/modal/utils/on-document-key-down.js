import {bigPicture} from '../variables.js';
import {isEscapeKey, isFieldFocused} from './checks.js';
import {onButtonCloseModal} from '../close-modal.js';
import {uploadOverlay} from '../../download-modal/variables.js';
import {onButtonCloseUploadModal} from '../../download-modal/utils/on-button-close-load-modal.js';
import {pristine} from '../../download-modal/utils/check-form.js';
import {onButtonCloseMessage} from '../../api/errors/get-upload-message.js';

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    if (document.querySelector('.success')) {
      const buttonSuccessClose = document.querySelector('.success');
      buttonSuccessClose.removeEventListener('click', onButtonCloseMessage);
      document.querySelector('.success').remove();
    }
    if (document.querySelector('.error')) {
      evt.stopPropagation();
      const buttonErrorClose = document.querySelector('.error');
      buttonErrorClose.removeEventListener('click', onButtonCloseMessage);
      document.querySelector('.error').remove();
    } else {
      if (uploadOverlay.classList.contains('hidden') && !(document.querySelector('.error'))) {
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
