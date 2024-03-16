import {bigPicture} from '../variables.js';
import {isEscapeKey} from './checks.js';
import {onButtonCloseModal} from '../close-modal.js';
import {uploadOverlay} from '../../download-modal/variables.js';
import {onButtonCloseUploadModal} from '../../download-modal/utils/on-button-close-load-modal.js';

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    if (uploadOverlay.classList.contains('hidden')) {
      bigPicture.classList.add('hidden');
      onButtonCloseModal();
    } else {
      onButtonCloseUploadModal();
    }
  }
};

export {onDocumentKeyDown};
