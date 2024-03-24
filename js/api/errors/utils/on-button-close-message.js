import {documentBody} from '../../../modal/variables.js';
import {onDocumentKeyDown} from '../../../modal/utils/on-document-key-down';
import {uploadMessageError, uploadMessageSuccess} from '../../variables';

const onButtonCloseMessage = (evt) => {
  const buttonSuccessClose = document.querySelector('.success');
  const buttonErrorClose = document.querySelector('.error');
  if (evt.target.className === 'success' || evt.target.className === 'success__button') {
    documentBody.removeEventListener('keydown', onDocumentKeyDown);
    buttonSuccessClose.removeEventListener('click', onButtonCloseMessage);
    uploadMessageSuccess.remove();
  }
  if (evt.target.className === 'error' || evt.target.className === 'error__button') {
    documentBody.removeEventListener('keydown', onDocumentKeyDown);
    buttonErrorClose.removeEventListener('click', onButtonCloseMessage);
    uploadMessageError.remove();
  }
};

export {onButtonCloseMessage};
