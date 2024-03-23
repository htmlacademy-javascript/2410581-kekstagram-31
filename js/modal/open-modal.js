import {bigPicture, documentBody, buttonClose} from './variables.js';
import {onButtonCloseModal} from './close-modal.js';
import {onDocumentKeyDown} from './utils/on-document-key-down.js';
import {showMoreComments} from './show-more-comments.js';
import {idPhoto} from './utils/fill-photo-modal.js';
import {getCommentData} from '../api/get-comment-data.js';

const onPhotoOpenModal = () => {
  bigPicture.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  buttonClose.addEventListener('click', onButtonCloseModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  getCommentData(idPhoto, showMoreComments);
};

export {onPhotoOpenModal};
