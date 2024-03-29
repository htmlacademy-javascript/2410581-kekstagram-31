import {commentsGeneration} from './comments-generation.js';
import {bigImg, likes, description} from '../variables.js';
import {changeCommentCount} from './change-comment-count.js';

export const fillModal = (posts, photoId) => {
  const photos = document.querySelectorAll('.picture');
  const currentPhoto = Array.from(photos).find((item) => item.dataset.pictureId === photoId);
  const currentLikes = currentPhoto.querySelector('.picture__likes');

  commentsGeneration(posts[photoId].comments);
  changeCommentCount(posts[photoId].comments);

  bigImg.src = posts[photoId].url;
  bigImg.alt = posts[photoId].description;
  description.textContent = posts[photoId].description;
  likes.textContent = currentLikes.textContent;
};
