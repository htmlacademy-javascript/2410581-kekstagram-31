import {bigPicture, commentsCount, commentLoader, documentBody, buttonClose} from './variables.js';
import {onDocumentKeyDown} from './utils/onDocumentKeyDown.js';

import {removeHiddenClass} from './showMoreComments.js';
const showMoreButton = document.querySelector('.social__comments-loader');

const closeModalMouse = () => {
  bigPicture.classList.add('hidden');
  commentsCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  documentBody.classList.remove('modal-open');
  buttonClose.removeEventListener('click', closeModalMouse);
  document.removeEventListener('keydown', onDocumentKeyDown);
  showMoreButton.removeEventListener('click', removeHiddenClass);
};

export {closeModalMouse};
