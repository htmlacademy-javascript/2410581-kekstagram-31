import {buttonCloseUploadModal, uploadOverlay, uploadFile, hashtags, textDescription, scaleControls, preview, effectList, sliderContainer} from '../variables';
import {documentBody} from '../../modal/variables';
import {onButtonOpenUploadModal} from '..';
import {onDocumentKeyDown} from '../../modal/utils/on-document-key-down';
import {pristine} from './check-form';
import {onButtonChangeScale} from '../effects/change-scale';
import {onPreviewChangeStyle} from '../effects/utils/on-preview-change-style';

const onButtonCloseUploadModal = () => {
  documentBody.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
  buttonCloseUploadModal.removeEventListener('click', onButtonCloseUploadModal);
  uploadFile.addEventListener('change', onButtonOpenUploadModal);
  textDescription.value = '';
  hashtags.value = '';
  uploadFile.value = '';
  pristine.reset();

  scaleControls.removeEventListener('click', onButtonChangeScale);
  preview.style.removeProperty('scale');

  preview.style.removeProperty('filter');
  sliderContainer.classList.add('hidden');
  effectList.removeEventListener('change', onPreviewChangeStyle);
};

export {onButtonCloseUploadModal};
