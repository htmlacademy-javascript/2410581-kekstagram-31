import { documentBody } from '../variables.js';
import {onButtonCloseMessage, onDocumentKeyDown} from '../modal/index.js';

const getUploadMessage = (messageElement, classText) => {
  documentBody.append(messageElement);
  const buttonMessageClose = document.querySelector(classText);
  documentBody.addEventListener('keydown', onDocumentKeyDown);
  buttonMessageClose.addEventListener('click', onButtonCloseMessage);
};

export {getUploadMessage};
