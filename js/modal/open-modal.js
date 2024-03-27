import {bigPicture, documentBody, buttonClose} from './variables.js';
import {onButtonCloseModal} from './close-modal.js';
import {onDocumentKeyDown} from './utils/on-document-key-down.js';
import {showMoreComments} from './show-more-comments.js';
import {addComment} from './utils/add-comment.js';

let comments;

const onButtonAddComments = () => {
  addComment(comments);
};

const onPhotoOpenModal = (posts, currentId) => {
  bigPicture.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  buttonClose.addEventListener('click', onButtonCloseModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  showMoreComments(posts[currentId].comments);
  comments = posts[currentId].comments;
};

export {onPhotoOpenModal, onButtonAddComments};
