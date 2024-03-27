import {settings} from '../settings.js';
import {showMoreButton} from './variables.js';
import {onButtonAddComments} from './open-modal.js';

const showMoreComments = (comments) => {
  if (comments.length <= settings.MAX_STARTING_COMMENTS) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', onButtonAddComments);
  } else {
    showMoreButton.addEventListener('click', onButtonAddComments);
  }
};

export {showMoreComments};
