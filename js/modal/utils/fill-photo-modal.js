import {commentsGeneration} from './comments-generation.js';
import {bigImg, likes, description} from '../variables.js';
import {changeCommentCount} from './change-comment-count.js';
import { getData } from '../../api/get-data.js';

let idPhoto;

export const fillModal = (photoId) => {
  const photos = document.querySelectorAll('.picture');
  const currentPhoto = Array.from(photos).find((item) => item.dataset.pictureId === photoId);
  const currentImg = currentPhoto.querySelector('img');
  const currentLikes = currentPhoto.querySelector('.picture__likes');
  idPhoto = photoId;

  getData()
    .then((posts) => {
      commentsGeneration(posts[photoId].comments);
      changeCommentCount(posts[photoId].comments);
    });
  bigImg.src = currentImg.src;
  description.textContent = currentImg.alt;
  likes.textContent = currentLikes.textContent;
};

export {idPhoto};
