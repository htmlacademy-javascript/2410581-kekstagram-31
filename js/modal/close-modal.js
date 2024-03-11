import {bigPicture, commentsCount, commentLoader, documentBody, buttonClose} from './variables.js';
import {onDocumentKeyDown} from './utils/on-document-key-down.js';

import {removeHiddenClass} from './utils/remove-hidden-class.js';
const showMoreButton = document.querySelector('.social__comments-loader');

const closeModal = () => {
  bigPicture.classList.add('hidden');
  commentsCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  documentBody.classList.remove('modal-open');
  buttonClose.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onDocumentKeyDown);
  showMoreButton.removeEventListener('click', removeHiddenClass);
};

export {closeModal};
