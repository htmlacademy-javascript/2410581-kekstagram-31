import {bigPicture} from '../variables.js';
import {isEscapeKey} from './checks.js';
import {closeModal} from '../close-modal.js';

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    bigPicture.classList.add('hidden');
    closeModal();
  }
};

export {onDocumentKeyDown};
