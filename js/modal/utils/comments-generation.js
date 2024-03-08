import {makeElements} from './make-element.js';

const commentsGeneration = (currentPhoto) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';
  for (let i = 0; i < currentPhoto.comments.length; i++) {
    commentsList.append(makeElements(currentPhoto.comments[i]));
  }
};

export {commentsGeneration};
