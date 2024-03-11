import {makeElements} from './make-element.js';
import {settings} from '../../settings.js';

const commentsGeneration = (currentPhoto) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';
  for (let i = 0; i < currentPhoto.comments.length; i++) {
    const newElement = makeElements(currentPhoto.comments[i]);
    if (i > settings.MAX_STARTING_COMMENTS - 1) {
      newElement.classList.add('hidden');
    }
    commentsList.append(newElement);
  }
};

export {commentsGeneration};
