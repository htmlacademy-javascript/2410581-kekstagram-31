import {settings} from '../settings';
import {showMoreButton} from './variables';
import {removeHiddenClass} from './utils/remove-hidden-class';
import {currentPhoto} from './utils/fill-photo-modal';

const showMoreComments = () => {
  // debugger;
  // const commentsList = document.querySelectorAll('.social__comment');

  if (currentPhoto.comments.length <= settings.MAX_STARTING_COMMENTS) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', removeHiddenClass);
  } else {
    showMoreButton.addEventListener('click', removeHiddenClass);
  }
};

export {showMoreComments};
