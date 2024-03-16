const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const buttonCloseUploadModal = uploadForm.querySelector('.img-upload__cancel');
const preview = uploadForm.querySelector('.img-upload__preview img');
const previews = uploadForm.querySelectorAll('.effects__preview');
const textDescription = uploadForm.querySelector('.text__description');
const hashtags = uploadForm.querySelector('.text__hashtags');

export {uploadFile, uploadOverlay, buttonCloseUploadModal, preview, previews, textDescription, uploadForm, hashtags};
