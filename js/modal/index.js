import {picturesList} from './variables.js';
import {fillModal} from './utils/fill-photo-modal.js';
import {onPhotoOpenModal} from './open-modal.js';
import {isEnterKey} from './utils/checks.js';
import {uploadFile} from '../download-modal/variables.js';
import {onButtonOpenUploadModal} from '../download-modal/index.js';

const makeEventClick = () => {
  picturesList.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');

    if (currentPicture) {
      evt.preventDefault();
      fillModal(currentPicture.dataset.pictureId);
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

  uploadFile.addEventListener('change', onButtonOpenUploadModal);
};

export {makeEventClick};
