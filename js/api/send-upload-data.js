import {settings} from '../settings.js';
import {getUploadMessage} from '../errors/get-upload-message.js';
import {blockSubmitButton} from '../errors/utils/block-submit-button.js';
import {unblockSubmitButton} from '../errors/utils/unblock-submit-button.js';
import {onButtonCloseUploadModal} from '../modal/index.js';
import {templateMessageError, templateMessageSuccess} from '../variables.js';

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
        getUploadMessage(templateMessageSuccess, '.success');
      } else {
        getUploadMessage(templateMessageError, '.error');
      }
    })
    .catch(() => {
      getUploadMessage(templateMessageError, '.error');
    })
    .finally(unblockSubmitButton);
};

export {sendUploadData};
