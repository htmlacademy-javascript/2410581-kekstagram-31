import {makeElements} from './make-element.js';
import {settings} from '../../settings.js';

const commentsGeneration = (comments) => {

  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';
  for (let i = 0; i < comments.length; i++) {
    const newElement = makeElements(comments[i]);
    if (i > settings.MAX_STARTING_COMMENTS - 1) {
      break;
    }
    commentsList.append(newElement);
  }
};

export {commentsGeneration};
