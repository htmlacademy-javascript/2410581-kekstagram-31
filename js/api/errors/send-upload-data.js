import {onButtonCloseUploadModal} from '../../download-modal/utils/on-button-close-load-modal';
import {settings} from '../../settings.js';
import {uploadMessageError, uploadMessageSuccess} from '../variables.js';
import {getUploadMessage} from './get-upload-message.js';
import {blockSubmitButton} from './utils/block-submit-button.js';
import { unblockSubmitButton } from './utils/unblock-submit-button.js';

const sendUploadData = (evt) => {
  const formData = new FormData(evt.target);
  blockSubmitButton();

  fetch(settings.SEND_DATA_LINK,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onButtonCloseUploadModal();
        getUploadMessage(uploadMessageSuccess, '.success');
      } else {
        getUploadMessage(uploadMessageError, '.error');
      }
    })
    .catch(() => {
      getUploadMessage(uploadMessageError, '.error');
    })
    .finally(unblockSubmitButton);
};

export {sendUploadData};
