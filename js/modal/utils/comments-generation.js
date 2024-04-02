import {settings} from '../../settings.js';
import {makeElements} from '../../utils/make-element.js';
import {socialCommentsList} from '../../variables.js';

const commentsGeneration = (comments) => {
  socialCommentsList.innerHTML = '';
  for (let i = 0; i < comments.length; i++) {
    const newElement = makeElements(comments[i]);
    if (i > settings.MAX_STARTING_COMMENTS - 1) {
      break;
    }
    socialCommentsList.append(newElement);
  }
};

export {commentsGeneration};
