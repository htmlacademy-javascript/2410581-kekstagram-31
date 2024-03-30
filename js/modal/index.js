import {picturesList} from './variables.js';
import {fillModal} from './utils/fill-photo-modal.js';
import {onPhotoOpenModal} from './open-modal.js';
import {isEnterKey} from './utils/checks.js';

const makeEventClick = (posts) => {
  picturesList.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');

    if (currentPicture) {
      const currentId = currentPicture.dataset.pictureId;
      evt.preventDefault();
      fillModal(posts, currentId);
      onPhotoOpenModal(posts, currentId);
    }
  });

  picturesList.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      const currentPicture = evt.target.closest('.picture');

      if (evt.target.className === 'picture') {
        const currentId = currentPicture.dataset.pictureId;
        fillModal(posts, currentId);
        onPhotoOpenModal(posts, currentId);
      }
    }
  });
};

export {makeEventClick};
