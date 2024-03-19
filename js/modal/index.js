import {picturesList} from './variables';
import {fillModal} from './utils/fill-photo-modal.js';
import {onPhotoOpenModal} from './open-modal.js';
import {isEnterKey} from './utils/checks.js';
import {uploadFile} from '../download-modal/variables.js';
import {onButtonOpenUploadModal} from '../download-modal/index.js';

const makeEventClick = () => {
  picturesList.addEventListener('click', (evt) => {
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

  uploadFile.addEventListener('change', onButtonOpenUploadModal);
};

export {makeEventClick};
