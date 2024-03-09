const picturesList = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const showMoreButton = document.querySelector('.social__comments-loader');

const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const documentBody = document.querySelector('body');

export {picturesList, bigPicture, buttonClose, commentLoader, commentsCount, documentBody, showMoreButton};
