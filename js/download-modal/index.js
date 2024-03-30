import {documentBody} from '../modal/variables.js';
import {uploadOverlay, uploadFile, buttonCloseUploadModal, preview, previews, uploadForm, scaleControls, sliderContainer, effectList} from './variables.js';
import {onButtonCloseUploadModal} from './utils/on-button-close-load-modal.js';
import {onDocumentKeyDown} from '../modal/utils/on-document-key-down.js';
import {onFormCheckValidate} from './utils/check-form.js';
import {onButtonChangeScale} from './effects/change-scale.js';
import {getNoUiSlider} from './effects/get-no-ui-slider.js';
import {onPreviewChangeStyle} from './effects/utils/on-preview-change-style.js';

getNoUiSlider();

const onButtonOpenUploadModal = () => {
  documentBody.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  buttonCloseUploadModal.addEventListener('click', onButtonCloseUploadModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  uploadFile.removeEventListener('change', onButtonOpenUploadModal);

  sliderContainer.classList.add('hidden');

  const file = uploadFile.files[0];
  if ((file.name.split('.').at(-1).toLowerCase()) === 'jpg' || (file.name.split('.').at(-1).toLowerCase()) === 'png') {
    preview.src = URL.createObjectURL(file);
    previews.forEach((item) => {
      item.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    });
  } else {
    preview.src = 'img/upload-default-image.jpg';
  }

  uploadForm.addEventListener('submit', onFormCheckValidate);

  scaleControls.addEventListener('click', onButtonChangeScale);


  effectList.addEventListener('change', onPreviewChangeStyle);
};

export {onButtonOpenUploadModal};
