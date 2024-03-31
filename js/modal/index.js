import {settings} from '../settings.js';
import {isEscapeKey, isFieldFocused} from './utils/checks.js';
import {onFormCheckValidate, pristine} from './utils/check-form.js';
import { onButtonChangeScale } from './utils/change-scale.js';
import { onPreviewChangeStyle } from './utils/on-preview-change-style.js';
import { getNoUiSlider } from '../utils/get-no-ui-slider.js';
import { bigPicture, buttonClose, buttonCloseUploadModal, commentLoader, commentsCount, commentsTotalCount, documentBody, effectList, effectNone, hashtags, numberOfComments, preview, previews, scaleControlValue, scaleControls, showMoreButton, sliderContainer, sliderValue, socialCommentsList, textDescription, uploadFile, uploadForm, templateMessageError, templateMessageSuccess, uploadOverlay } from '../variables.js';
import { checkHashtagduplicate } from './utils/pristine-checks.js';
import { makeElements } from '../utils/make-element.js';
import { getDataError } from '../errors/get-data-error.js';

let comments;
getNoUiSlider();

// Работа с сообщениями в отктытом посте

const onButtonAddComments = () => {
  addComment(comments);
};

function addComment (commentsArray) {
  let commentsList = bigPicture.querySelectorAll('.social__comment');

  for (let i = commentsList.length; i < settings.MAX_STARTING_COMMENTS + commentsList.length; i++) {
    if (typeof commentsArray[i] === 'undefined') {
      break;
    }
    socialCommentsList.append(makeElements(commentsArray[i]));
    numberOfComments.textContent = +numberOfComments.textContent + 1;
  }
  commentsList = bigPicture.querySelectorAll('.social__comment');
  if (commentsList.length === +commentsTotalCount.textContent) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', onButtonAddComments);
  }
}

const showMoreComments = (commentsArray) => {
  if (commentsArray.length <= settings.MAX_STARTING_COMMENTS) {
    showMoreButton.classList.add('hidden');
    showMoreButton.removeEventListener('click', onButtonAddComments);
  } else {
    showMoreButton.addEventListener('click', onButtonAddComments);
  }
};

// Обработчик проверки нажатия ESC при открытых модальных окнах и сообщениях

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    const buttonSuccessClose = document.querySelector('.success');
    const buttonErrorClose = document.querySelector('.error');

    if (buttonSuccessClose) {
      buttonSuccessClose.removeEventListener('click', onButtonCloseMessage);
      buttonSuccessClose.remove();
    }
    if (buttonErrorClose) {
      evt.stopPropagation();
      buttonErrorClose.removeEventListener('click', onButtonCloseMessage);
      buttonErrorClose.remove();
    } else {
      if (uploadOverlay.classList.contains('hidden') && !(buttonErrorClose)) {
        bigPicture.classList.add('hidden');
        onButtonCloseModal();
      } else {
        if (isFieldFocused()) {
          evt.stopPropagation();
        } else {
          pristine.reset();
          onButtonCloseUploadModal();
        }
      }
    }
  }
};

// Закрытие модальных окон и сообщений

function onButtonCloseUploadModal() {
  documentBody.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
  buttonCloseUploadModal.removeEventListener('click', onButtonCloseUploadModal);
  uploadFile.addEventListener('change', onButtonOpenUploadModal);
  scaleControlValue.value = '100%';
  textDescription.value = '';
  checkHashtagduplicate.value = '';
  uploadFile.value = '';
  sliderValue.value = '';
  hashtags.value = '';
  effectNone.checked = true;
  pristine.reset();

  scaleControls.removeEventListener('click', onButtonChangeScale);
  preview.style.removeProperty('transform');

  preview.style.removeProperty('filter');
  sliderContainer.classList.add('hidden');
  effectList.removeEventListener('change', onPreviewChangeStyle);
}

function onButtonCloseMessage(evt) {
  const buttonSuccessClose = document.querySelector('.success');
  const buttonErrorClose = document.querySelector('.error');
  if (evt.target.className === 'success' || evt.target.className === 'success__button') {
    documentBody.removeEventListener('keydown', onDocumentKeyDown);
    buttonSuccessClose.removeEventListener('click', onButtonCloseMessage);
    templateMessageSuccess.remove();
  }
  if (evt.target.className === 'error' || evt.target.className === 'error__button') {
    documentBody.removeEventListener('keydown', onDocumentKeyDown);
    buttonErrorClose.removeEventListener('click', onButtonCloseMessage);
    templateMessageError.remove();
  }
}

function onButtonCloseModal() {
  bigPicture.classList.add('hidden');
  commentsCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  documentBody.classList.remove('modal-open');
  buttonClose.removeEventListener('click', onButtonCloseModal);
  document.removeEventListener('keydown', onDocumentKeyDown);
  showMoreButton.removeEventListener('click', onButtonAddComments);
  numberOfComments.textContent = 'Загрузка...';
  commentsTotalCount.textContent = 'Загрузка...';
  socialCommentsList.innerHTML = 'Загрузка...';
}

// Открытие модальных окон

const onPhotoOpenModal = (posts, currentId) => {
  bigPicture.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  buttonClose.addEventListener('click', onButtonCloseModal);
  document.addEventListener('keydown', onDocumentKeyDown);
  showMoreComments(posts[currentId].comments);
  comments = posts[currentId].comments;
};

function onButtonOpenUploadModal() {
  const file = uploadFile.files[0];
  const fileExt = file.name.toLowerCase().split('.').at(-1);

  if (settings.FILE_TYPES.includes(fileExt)) {
    documentBody.classList.add('modal-open');
    uploadOverlay.classList.remove('hidden');
    sliderContainer.classList.add('hidden');

    buttonCloseUploadModal.addEventListener('click', onButtonCloseUploadModal);
    document.addEventListener('keydown', onDocumentKeyDown);
    uploadFile.removeEventListener('change', onButtonOpenUploadModal);
    preview.src = URL.createObjectURL(file);
    previews.forEach((item) => {
      item.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    });

    uploadForm.addEventListener('submit', onFormCheckValidate);
    scaleControls.addEventListener('click', onButtonChangeScale);
    effectList.addEventListener('change', onPreviewChangeStyle);

  } else {
    getDataError('Некорректный формат изображения');
  }
}

export {onPhotoOpenModal, onButtonAddComments, onButtonCloseModal, onDocumentKeyDown, onButtonCloseUploadModal, onButtonCloseMessage, onButtonOpenUploadModal};
