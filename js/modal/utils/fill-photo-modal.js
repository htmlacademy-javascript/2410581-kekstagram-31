import {commentsGeneration} from './comments-generation.js';
import {bigImg, likes, description} from '../variables.js';
import {changeCommentCount} from './change-comment-count.js';

export const fillModal = (posts, photoId) => {
  const photos = document.querySelectorAll('.picture');
  const currentPhoto = Array.from(photos).find((item) => item.dataset.pictureId === photoId);
  const currentImg = currentPhoto.querySelector('img');
  const currentLikes = currentPhoto.querySelector('.picture__likes');

  commentsGeneration(posts[photoId].comments);
  changeCommentCount(posts[photoId].comments);

  bigImg.src = currentImg.src;
  description.textContent = currentImg.alt;
  likes.textContent = currentLikes.textContent;
};
