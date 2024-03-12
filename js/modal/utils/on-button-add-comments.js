import {showMoreButton, socialCommentsList, bigPicture, commentsTotalCount, numberOfComments} from '../variables';
import {settings} from '../../settings';
import {currentPhoto} from './fill-photo-modal';
import {makeElements} from './make-element';

const onButtonAddComments = () => {
  let comments = bigPicture.querySelectorAll('.social__comment');

  for (let i = comments.length; i < settings.MAX_STARTING_COMMENTS + comments.length; i++) {
    if (typeof currentPhoto.comments[i] === 'undefined') {
      break;
    }
    socialCommentsList.append(makeElements(currentPhoto.comments[i]));
    numberOfComments.textContent = +numberOfComments.textContent + 1;
  }
  comments = bigPicture.querySelectorAll('.social__comment');
  if (comments.length === +commentsTotalCount.textContent) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', onButtonAddComments);
  }
};

export {onButtonAddComments};
