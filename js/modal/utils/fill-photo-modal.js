import {commentsGeneration} from './comments-generation.js';
import {bigImg, likes, description} from '../variables.js';
import {changeCommentCount} from './change-comment-count.js';
import {getCommentData} from '../../api/get-comment-data.js';

let idPhoto;

export const fillModal = (photoId) => {
  const photos = document.querySelectorAll('.picture');
  const currentPhoto = Array.from(photos).find((item) => item.dataset.pictureId === photoId);
  const currentImg = currentPhoto.querySelector('img');
  const currentLikes = currentPhoto.querySelector('.picture__likes');
  idPhoto = photoId;

  getCommentData(photoId, commentsGeneration);
  bigImg.src = currentImg.src;
  description.textContent = currentImg.alt;
  likes.textContent = currentLikes.textContent;
  getCommentData(photoId, changeCommentCount);
};

export {idPhoto};
