import {buttonCloseUploadModal, uploadOverlay, uploadFile, hashtags, textDescription} from '../variables';
import {documentBody} from '../../modal/variables';
import {onButtonOpenUploadModal} from '..';
import {onDocumentKeyDown} from '../../modal/utils/on-document-key-down';
import {testEsc} from '../../modal/utils/on-document-key-down';

const onButtonCloseUploadModal = () => {
  documentBody.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
  buttonCloseUploadModal.removeEventListener('click', onButtonCloseUploadModal);
  uploadFile.addEventListener('change', onButtonOpenUploadModal);
  textDescription.value = '';
  hashtags.value = '';
  uploadFile.value = '';
  textDescription.removeEventListener('keydown', testEsc);
  hashtags.removeEventListener('keydown', testEsc);
};

export {onButtonCloseUploadModal};
