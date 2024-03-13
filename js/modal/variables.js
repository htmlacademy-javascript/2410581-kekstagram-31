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

export {picturesList, bigPicture, buttonClose, commentLoader, commentsCount, documentBody, showMoreButton, socialCommentsList, commentsTotalCount, numberOfComments};
