const errorAllPosts = document
  .querySelector('#data-error')
  .content
  .querySelector('.data-error');

const uploadMessageSuccess = document.querySelector('#success')
  .content
  .querySelector('.success');

const uploadMessageError = document.querySelector('#error')
  .content
  .querySelector('.error');

const submitButton = document.querySelector('.img-upload__submit');

export {errorAllPosts, uploadMessageSuccess, uploadMessageError, submitButton};
