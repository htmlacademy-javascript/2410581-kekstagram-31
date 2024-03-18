import {settings} from '../../settings';
import {hashtags, textDescription} from '../variables';
import {getHashtagsArray} from './check-form';

const correctHashtag = settings.HASHTAG_CURRENT;

const checkHashtag = () => {
  if (!hashtags.value) {
    return true;
  }
  return getHashtagsArray().every((hashtag) => correctHashtag.test(hashtag));
};

const checkHashtagLenght = () => getHashtagsArray().length <= settings.MAX_HASHTAGS;

const checkHashtagduplicate = () => new Set(getHashtagsArray()).size === getHashtagsArray().length;

const checkLength = () => textDescription.value.length <= settings.MAX_LENGTH_DESCTIPTION;

export {checkHashtag, checkHashtagLenght, checkHashtagduplicate, checkLength};
