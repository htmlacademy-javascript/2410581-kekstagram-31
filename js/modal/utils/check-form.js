import {settings} from '../../settings.js';
import {checkHashtag, checkHashtagLenght, checkHashtagduplicate, checkLength} from './pristine-checks.js';
import {sendUploadData} from '../../api/send-upload-data.js';
import { hashtags, textDescription, uploadForm } from '../../variables.js';

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
});

pristine.addValidator(textDescription, checkLength, `длина комментария больше ${settings.MAX_LENGTH_DESCTIPTION} символов`);
pristine.addValidator(hashtags, checkHashtag, 'Введён невалидный хэштег');
pristine.addValidator(hashtags, checkHashtagLenght, 'Превышено количество хэштегов');
pristine.addValidator(hashtags, checkHashtagduplicate, 'Хэштеги повторяются');

const onFormCheckValidate = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendUploadData(evt);
  }
};

export {onFormCheckValidate, pristine};
