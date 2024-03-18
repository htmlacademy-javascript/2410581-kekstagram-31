import {textDescription, uploadForm, hashtags, buttonCloseUploadModal} from '../variables';
import {settings} from '../../settings';
import {checkHashtag, checkHashtagLenght, checkHashtagduplicate, checkLength} from './pristine-checks';

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
});

pristine.addValidator(textDescription, checkLength, `длина комментария больше ${settings.MAX_LENGTH_DESCTIPTION} символов`);

const getHashtagsArray = () => hashtags.value.trim().toLowerCase().split(' ');

pristine.addValidator(hashtags, checkHashtag, 'Введён невалидный хэштег');
pristine.addValidator(hashtags, checkHashtagLenght, 'Превышено количество хэштегов');
pristine.addValidator(hashtags, checkHashtagduplicate, 'Хэштеги повторяются');


hashtags.addEventListener('input', () => {
  hashtags.value = hashtags.value.replace(/\s+/g, ' ');
  pristine.validate();
});

textDescription.addEventListener('input', () => {
  pristine.validate();
});

uploadForm.addEventListener('submit', (evt) => {
  pristine.validate();
  if (!pristine.validate()) {
    evt.preventDefault();
  } else {
    pristine.reset();
  }
});

buttonCloseUploadModal.addEventListener('click', () => {
  pristine.reset();
});


export {pristine, getHashtagsArray};
