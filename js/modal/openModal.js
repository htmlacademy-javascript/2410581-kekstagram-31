import {bigPicture, commentsCount, commentLoader, documentBody, buttonClose} from './variables.js';
import {closeModalMouse} from './closeModal.js';
import {onDocumentEscDown} from './utils/onDocumentKeyDown.js';

const openModalMouse = () => {
  bigPicture.classList.remove('hidden');
  commentsCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  documentBody.classList.add('modal-open');
  buttonClose.addEventListener('click', closeModalMouse);
  document.addEventListener('keydown', onDocumentEscDown);
};

export {openModalMouse};
