import {documentBody} from '../modal/variables';
import {uploadOverlay, uploadFile, buttonCloseUploadModal, preview, previews, uploadForm, scaleControls} from './variables';
import {onButtonCloseUploadModal} from './utils/on-button-close-load-modal';
import {onDocumentKeyDown} from '../modal/utils/on-document-key-down';
import {onFormCheckValidate} from './utils/check-form.js';
import {onButtonChangeScale} from './effects/change-scale.js';

const onButtonOpenUploadModal = () => {
  documentBody.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  buttonCloseUploadModal.addEventListener('click', onButtonCloseUploadModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  uploadFile.removeEventListener('change', onButtonOpenUploadModal);

  const file = uploadFile.files[0];
  if ((file.name.split('.').at(-1).toLowerCase()) === 'jpg' || (file.name.split('.').at(-1).toLowerCase()) === 'png') {
    const reader = new FileReader();
    reader.onloadend = () => {
      preview.src = reader.result;
      previews.forEach((item) => {
        item.style.backgroundImage = `url(${reader.result})`;
      });
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = 'img/upload-default-image.jpg';
  }

  uploadForm.addEventListener('submit', onFormCheckValidate);

  scaleControls.addEventListener('click', onButtonChangeScale);

  // const effectList = document.querySelector('.effects__list');

  // effectList.addEventListener('change', (evt) => {
  //   console.log(evt.target.id === 'effect-sepia');
  // });
};

export {onButtonOpenUploadModal};
