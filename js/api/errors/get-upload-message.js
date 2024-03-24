import {onDocumentKeyDown} from '../../modal/utils/on-document-key-down.js';
import {documentBody} from '../../modal/variables.js';
import {onButtonCloseMessage} from './utils/on-button-close-message.js';

const getUploadMessage = (messageElement, classText) => {
  documentBody.append(messageElement);
  const buttonMessageClose = document.querySelector(classText);
  documentBody.addEventListener('keydown', onDocumentKeyDown);
  buttonMessageClose.addEventListener('click', onButtonCloseMessage);
};

export {getUploadMessage, onButtonCloseMessage};
