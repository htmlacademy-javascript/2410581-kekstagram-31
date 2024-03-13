import {settings} from '../settings';
import {showMoreButton} from './variables';
import {onButtonAddComments} from './utils/on-button-add-comments';
import {currentPhoto} from './utils/fill-photo-modal';

const showMoreComments = () => {
  if (currentPhoto.comments.length <= settings.MAX_STARTING_COMMENTS) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', onButtonAddComments);
  } else {
    showMoreButton.addEventListener('click', onButtonAddComments);
  }
};

export {showMoreComments};
