import {textDescription, uploadForm, hashtags} from '../variables';

const onFormCheckValidation = (evt) => {

  const pristine = new Pristine(uploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    successClass: 'img-upload__field-wrapper--valid',
    errorTextParent: 'img-upload__field-wrapper',
  });

  const checkLength = () => textDescription.value.length <= 140;

  pristine.addValidator(textDescription, checkLength, `длина комментария ${textDescription.value.length} больше 140 символов`);

  const correctHashtag = /(^#([a-zа-яё0-9]{1,19})$)/i;
  hashtags.value = hashtags.value.replace(/\s+/g, ' ');
  const hashtagsArray = hashtags.value.trim().toLowerCase().split(' ');
  const checkHashtag = () => hashtagsArray.every((hashtag) => correctHashtag.test(hashtag));
  const checkHashtagLenght = () => hashtagsArray.length < 5;
  const checkHashtagduplicate = () => new Set(hashtagsArray).size === hashtagsArray.length;

  checkHashtag();

  if (hashtags.value) {
    pristine.addValidator(hashtags, checkHashtag, 'Введён невалидный хэштег');
    pristine.addValidator(hashtags, checkHashtagLenght, 'Превышено количество хэштегов');
    pristine.addValidator(hashtags, checkHashtagduplicate, 'Хэштеги повторяются');
  }

  pristine.validate();

  if (!pristine.validate()) {
    evt.preventDefault();
  }

};

export {onFormCheckValidation};
