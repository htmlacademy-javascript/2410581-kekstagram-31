import {documentBody} from '../modal/variables';
import {uploadOverlay, uploadFile, uploadForm, buttonCloseUploadModal, preview, previews, textDescription, hashtags} from './variables';
import {onButtonCloseUploadModal} from './utils/on-button-close-load-modal';
import {onDocumentKeyDown} from '../modal/utils/on-document-key-down';
import {onFormCheckValidation} from './utils/check-form';

const onButtonOpenUploadModal = () => {
  documentBody.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  buttonCloseUploadModal.addEventListener('click', onButtonCloseUploadModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  uploadFile.removeEventListener('change', onButtonOpenUploadModal);
  textDescription.addEventListener('input', onFormCheckValidation);
  uploadForm.addEventListener('submit', onFormCheckValidation);
  hashtags.addEventListener('input', onFormCheckValidation);

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
