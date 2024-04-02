import {commentsGeneration} from './comments-generation.js';
import {changeCommentCount} from './change-comment-count.js';
import {bigImg, description, likes} from '../../variables.js';

export const fillModal = (posts, photoId) => {
  commentsGeneration(posts[photoId].comments);
  changeCommentCount(posts[photoId].comments);

  bigImg.src = posts[photoId].url;
  bigImg.alt = posts[photoId].description;
  description.textContent = posts[photoId].description;
  likes.textContent = posts[photoId].likes;
};
