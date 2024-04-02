import {settings} from '../../settings.js';
import {hashtags} from '../../variables.js';

const correctHashtag = settings.HASHTAG_CURRENT;
const getHashtagsArray = (flag = false) => flag ? hashtags.value.trim().toLowerCase().split(' ') : hashtags.value.trim().split(' ') ;
const checkHashtag = (value) => {
  if (!value) {
    return true;
  }
  hashtags.value = value.replace(/\s+/g, ' ');
  return getHashtagsArray().every((hashtag) => correctHashtag.test(hashtag));
};

const checkHashtagQuantity = () => getHashtagsArray().length <= settings.MAX_HASHTAGS;

const checkHashtagDuplicate = () => new Set(getHashtagsArray(true)).size === getHashtagsArray().length;

const checkDescriptionLength = (value) => value.length <= settings.MAX_LENGTH_DESCTIPTION;

export {checkHashtag, checkHashtagQuantity, checkHashtagDuplicate, checkDescriptionLength};
