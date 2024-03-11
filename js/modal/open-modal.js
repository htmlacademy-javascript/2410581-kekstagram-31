import {bigPicture, documentBody, buttonClose} from './variables.js';
import {closeModal} from './close-modal.js';
import {onDocumentKeyDown} from './utils/on-document-key-down.js';
import {showMoreComments} from './show-more-comments.js';

const openModal = () => {
  bigPicture.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  buttonClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  showMoreComments();
};

export {openModal};
