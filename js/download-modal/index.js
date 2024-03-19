import {documentBody} from '../modal/variables';
import {uploadOverlay, uploadFile, buttonCloseUploadModal, preview, previews, uploadForm} from './variables';
import {onButtonCloseUploadModal} from './utils/on-button-close-load-modal';
import {onDocumentKeyDown} from '../modal/utils/on-document-key-down';
import {onFormCheckValidate} from './utils/check-form.js';

const onButtonOpenUploadModal = () => {
  documentBody.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  buttonCloseUploadModal.addEventListener('click', onButtonCloseUploadModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  uploadFile.removeEventListener('change', onButtonOpenUploadModal);

  const file = uploadFile.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    preview.src = reader.result;
    previews.forEach((item) => {
      item.style.backgroundImage = `url(${reader.result})`;
    });
  };
  reader.readAsDataURL(file);

  uploadForm.addEventListener('submit', onFormCheckValidate);
};

export {onButtonOpenUploadModal};
