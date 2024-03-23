import {settings} from '../settings.js';
import {showMoreButton} from './variables.js';
import {onButtonAddComments} from './utils/on-button-add-comments.js';

const showMoreComments = (id) => {
  if (id.length <= settings.MAX_STARTING_COMMENTS) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', onButtonAddComments);
  } else {
    showMoreButton.addEventListener('click', onButtonAddComments);
  }
};

export {showMoreComments};
