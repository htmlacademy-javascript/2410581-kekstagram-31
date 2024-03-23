import {bigPicture, socialCommentsList, numberOfComments, showMoreButton, commentsTotalCount} from '../variables.js';
import {settings} from '../../settings.js';
import {makeElements} from './make-element.js';
import {onButtonAddComments} from './on-button-add-comments';

const addComent = (commentsArray) => {
  let comments = bigPicture.querySelectorAll('.social__comment');

  for (let i = comments.length; i < settings.MAX_STARTING_COMMENTS + comments.length; i++) {
    if (typeof commentsArray[i] === 'undefined') {
      break;
    }
    socialCommentsList.append(makeElements(commentsArray[i]));
    numberOfComments.textContent = +numberOfComments.textContent + 1;
  }
  comments = bigPicture.querySelectorAll('.social__comment');
  if (comments.length === +commentsTotalCount.textContent) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', onButtonAddComments);
  }
};

export {addComent};
