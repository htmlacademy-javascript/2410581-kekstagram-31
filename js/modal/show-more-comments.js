import {settings} from '../settings';
import {showMoreButton} from './variables';
import {removeHiddenClass} from './utils/remove-hidden-class';

const showMoreComments = () => {
  const commentsList = document.querySelectorAll('.social__comment');

  if (commentsList.length <= settings.MAX_STARTING_COMMENTS) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', removeHiddenClass);
  } else {
    showMoreButton.addEventListener('click', removeHiddenClass);
  }
};

export {showMoreComments};
