import {bigPicture, commentsCount, commentLoader, documentBody, buttonClose} from './variables.js';
import {onDocumentKeyDown} from './utils/on-document-key-down.js';

import {onButtonAddComments} from './utils/on-button-add-comments.js';
const showMoreButton = document.querySelector('.social__comments-loader');

const onButtonCloseModal = () => {
  bigPicture.classList.add('hidden');
  commentsCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  documentBody.classList.remove('modal-open');
  buttonClose.removeEventListener('click', onButtonCloseModal);
  document.removeEventListener('keydown', onDocumentKeyDown);
  showMoreButton.removeEventListener('click', onButtonAddComments);
};

export {onButtonCloseModal};
