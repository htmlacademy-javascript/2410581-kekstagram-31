import {bigPicture} from '../variables.js';
import {isEscapeKey} from './checks.js';
import {closeModalMouse} from '../closeModal.js';

const onDocumentEscDown = (evt) => {
  if (isEscapeKey(evt)) {
    bigPicture.classList.add('hidden');
    closeModalMouse();
  }
};

export {onDocumentEscDown};
