import {commentsGeneration} from './comments-generation.js';
import {similarPosts} from '../../photoGeneration.js';
import {bigPicture} from '../variables.js';

// Заполняет информацию для модального окна
export const fillModal = (evt) => {
  const bigImg = bigPicture.querySelector('.big-picture__img img');
  const likes = bigPicture.querySelector('.likes-count');
  const description = bigPicture.querySelector('.social__caption');
  const allComments = bigPicture.querySelector('.social__comment-total-count');
  const showComments = bigPicture.querySelector('.social__comment-shown-count');
  let node;
  let currentPhoto;
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
  showComments.textContent = currentPhoto.comments.length;
};


