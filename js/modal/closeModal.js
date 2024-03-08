import {bigPicture, commentsCount, commentLoader, documentBody, buttonClose} from './variables.js';
import {onDocumentEscDown} from './utils/onDocumentKeyDown.js';

const closeModalMouse = () => {
  bigPicture.classList.add('hidden');
  commentsCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  documentBody.classList.remove('modal-open');
  buttonClose.removeEventListener('click', closeModalMouse);
  document.removeEventListener('keydown', onDocumentEscDown);
};

export {closeModalMouse};
