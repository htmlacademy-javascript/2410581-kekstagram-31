import {buttonCloseUploadModal, uploadOverlay, uploadFile, hashtags, textDescription, uploadForm} from '../variables';
import {documentBody} from '../../modal/variables';
import {onButtonOpenUploadModal} from '..';
import {onDocumentKeyDown} from '../../modal/utils/on-document-key-down';
import {onFormCheckValidation} from './check-form';

const onButtonCloseUploadModal = () => {
  documentBody.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
  buttonCloseUploadModal.removeEventListener('click', onButtonCloseUploadModal);
  uploadFile.addEventListener('change', onButtonOpenUploadModal);
  textDescription.value = '';
  textDescription.removeEventListener('input', onFormCheckValidation);
  uploadForm.removeEventListener('submit', onFormCheckValidation);
  hashtags.value = '';
  hashtags.removeEventListener('input', onFormCheckValidation);
  uploadFile.value = '';
};

export {onButtonCloseUploadModal};
