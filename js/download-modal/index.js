import {documentBody} from '../modal/variables';
import {uploadOverlay, uploadFile, buttonCloseUploadModal, preview, previews, textDescription, hashtags} from './variables';
import {onButtonCloseUploadModal} from './utils/on-button-close-load-modal';
import {onDocumentKeyDown, testEsc} from '../modal/utils/on-document-key-down';
import './utils/check-form.js';

const onButtonOpenUploadModal = () => {
  documentBody.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  buttonCloseUploadModal.addEventListener('click', onButtonCloseUploadModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  uploadFile.removeEventListener('change', onButtonOpenUploadModal);
  textDescription.addEventListener('keydown', testEsc);
  hashtags.addEventListener('keydown', testEsc);

  const file = uploadFile.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    preview.src = reader.result;
    previews.forEach((item) => {
      item.style.backgroundImage = `url(${reader.result})`;
    });
  };
  reader.readAsDataURL(file);
};

export {onButtonOpenUploadModal};
