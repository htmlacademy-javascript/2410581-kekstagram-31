import {buttonCloseUploadModal, uploadOverlay, uploadFile, hashtags, textDescription, scaleControls, preview, effectList, sliderContainer, scaleControlValue, sliderValue, effectNone} from '../variables.js';
import {documentBody} from '../../modal/variables.js';
import {onButtonOpenUploadModal} from '..';
import {onDocumentKeyDown} from '../../modal/utils/on-document-key-down.js';
import {pristine} from './check-form.js';
import {onButtonChangeScale} from '../effects/change-scale.js';
import {onPreviewChangeStyle} from '../effects/utils/on-preview-change-style.js';

const onButtonCloseUploadModal = () => {
  documentBody.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
  buttonCloseUploadModal.removeEventListener('click', onButtonCloseUploadModal);
  uploadFile.addEventListener('change', onButtonOpenUploadModal);
  scaleControlValue.value = '100%';
  textDescription.value = '';
  hashtags.value = '';
  uploadFile.value = '';
  sliderValue.value = '';
  effectNone.checked = true;
  pristine.reset();

  scaleControls.removeEventListener('click', onButtonChangeScale);
  preview.style.removeProperty('scale');

  preview.style.removeProperty('filter');
  sliderContainer.classList.add('hidden');
  effectList.removeEventListener('change', onPreviewChangeStyle);
};

export {onButtonCloseUploadModal};
