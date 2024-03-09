import {showMoreButton} from '../variables';
import {settings} from '../../settings';

const numberOfComments = document.querySelector('.social__comment-shown-count');

const removeHiddenClass = () => {
  let commentsList = document.querySelectorAll('.social__comment.hidden');
  for (let i = 0; i < settings.MAX_STARTING_COMMENTS; i++) {
    if (typeof commentsList[i] === 'undefined') {
      break;
    }
    commentsList[i].classList.remove('hidden');
    numberOfComments.textContent = +numberOfComments.textContent + 1;
  }
  commentsList = document.querySelectorAll('.social__comment.hidden');
  if (commentsList.length === 0) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', removeHiddenClass);
  }
};

export {removeHiddenClass};
