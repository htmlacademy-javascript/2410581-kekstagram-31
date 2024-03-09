import {bigPicture, documentBody, buttonClose} from './variables.js';
import {closeModalMouse} from './closeModal.js';
import {onDocumentKeyDown} from './utils/onDocumentKeyDown.js';
import {showMoreComments} from './showMoreComments.js';

const openModal = () => {
  bigPicture.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  buttonClose.addEventListener('click', closeModalMouse);
  document.addEventListener('keydown', onDocumentKeyDown);
  showMoreComments();
};

export {openModal};
