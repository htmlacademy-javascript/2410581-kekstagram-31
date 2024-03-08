// import fillModal from 'utils/fillModal.js';
import {picturesList} from './variables';
import {fillModal} from './utils/fill-modal.js';
import {openModalMouse} from './openModal.js';
import {isEnterKey} from './utils/checks.js';

picturesList.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.className === 'picture__img') {
    fillModal(evt);
    openModalMouse();
  }
});

picturesList.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    if (evt.target.className === 'picture') {
      fillModal(evt);
      openModalMouse();
    }
  }
});


