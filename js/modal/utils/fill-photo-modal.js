import {commentsGeneration} from './comments-generation.js';
import {similarPosts} from '../../photo-generation.js';
import {bigPicture} from '../variables.js';
import {settings} from '../../settings.js';

let currentPhoto;

export const fillModal = (evt) => {
  const bigImg = bigPicture.querySelector('.big-picture__img img');
  const likes = bigPicture.querySelector('.likes-count');
  const description = bigPicture.querySelector('.social__caption');
  const allComments = bigPicture.querySelector('.social__comment-total-count');
  const removeHiddenClasss = bigPicture.querySelector('.social__comment-shown-count');
  let node;
  // let currentPhoto; убрал лишний currentPhoto
  if (evt.type === 'keydown') {
    node = evt.target.parentNode;
    currentPhoto = similarPosts[[...node.children].indexOf(evt.target) - 2];
  } else {
    node = evt.target.parentNode.parentNode;
    currentPhoto = similarPosts[[...node.children].indexOf(evt.target.parentNode) - 2];
  }

  commentsGeneration(currentPhoto);

  bigImg.src = currentPhoto.url;
  bigImg.alt = currentPhoto.description;
  likes.textContent = currentPhoto.likes;
  description.textContent = currentPhoto.description;
  allComments.textContent = currentPhoto.comments.length;
  removeHiddenClasss.textContent = currentPhoto.comments.length > settings.MAX_STARTING_COMMENTS ? settings.MAX_STARTING_COMMENTS : currentPhoto.comments.length;
};

export {currentPhoto};
