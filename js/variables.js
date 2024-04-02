// templates

const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const templateErrorPosts = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

const templateMessageSuccess = document.querySelector('#success')
  .content
  .querySelector('.success');

const templateMessageError = document.querySelector('#error')
  .content
  .querySelector('.error');

// Большая фотография

const picturesList = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');
const showMoreButton = bigPicture.querySelector('.social__comments-loader');
const socialCommentsList = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsTotalCount = commentsCount.querySelector('.social__comment-total-count');
const numberOfComments = commentsCount.querySelector('.social__comment-shown-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const documentBody = document.querySelector('body');
const bigImg = bigPicture.querySelector('.big-picture__img img');
const likes = bigPicture.querySelector('.likes-count');
const description = bigPicture.querySelector('.social__caption');

// Сортировка

const filterButtons = document.querySelector('.img-filters');

// Ошибки

const submitButton = document.querySelector('.img-upload__submit');

// Модальное окно загрузки фотографии

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const buttonCloseUploadModal = uploadForm.querySelector('.img-upload__cancel');
const preview = uploadForm.querySelector('.img-upload__preview img');
const previews = uploadForm.querySelectorAll('.effects__preview');
const textDescription = uploadForm.querySelector('.text__description');
const hashtags = uploadForm.querySelector('.text__hashtags');

const scaleControls = uploadForm.querySelector('.scale');
const scaleControlValue = uploadForm.querySelector('.scale__control--value');

const sliderValue = uploadForm.querySelector('.effect-level__value');
const rangeSlider = uploadForm.querySelector('.effect-level__slider');
const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
const effectList = uploadForm.querySelector('.effects__list');
const effectNone = document.querySelector('#effect-none');

export {picturesList, templatePicture, bigPicture, buttonClose, commentLoader, commentsCount, documentBody, showMoreButton, socialCommentsList, commentsTotalCount, numberOfComments, bigImg, likes, description, filterButtons, templateErrorPosts, templateMessageSuccess, templateMessageError, submitButton, uploadFile, uploadOverlay, buttonCloseUploadModal, preview, previews, textDescription, uploadForm, hashtags, scaleControls, scaleControlValue, sliderValue, rangeSlider, sliderContainer, effectList, effectNone};
