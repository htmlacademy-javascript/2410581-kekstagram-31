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

export {uploadFile, uploadOverlay, buttonCloseUploadModal, preview, previews, textDescription, uploadForm, hashtags, scaleControls, scaleControlValue, sliderValue, rangeSlider, sliderContainer, effectList, effectNone};
