import {picturesList} from './variables';
import {fillModal} from './utils/fill-photo-modal.js';
import {onPhotoOpenModal} from './open-modal.js';
import {isEnterKey} from './utils/checks.js';

const makeEventClick = () => {
  picturesList.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.className === 'picture__img') {
      fillModal(evt);
      onPhotoOpenModal();
    }
  });

  picturesList.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      if (evt.target.className === 'picture') {
        fillModal(evt);
        onPhotoOpenModal();
      }
    }
  });
};

export {makeEventClick};
