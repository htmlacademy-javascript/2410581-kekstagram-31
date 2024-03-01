import {settings} from './settings.js';
import {createUnicInteger} from './util.js';
import {getRandomArrayElement} from './util.js';
import {createCommentId} from './util.js';
import {messages} from './data.js';
import {names} from './data.js';
import {descriptions} from './data.js';
import {getRandomInteger} from './util.js';

const getRandomId = createUnicInteger(1, settings.MAX_USERS);
const getUnicPhoto = createUnicInteger(1, settings.MAX_USERS);
const getUnicDesctiption = createUnicInteger(0, descriptions.length - 1);
const getUnicCommentId = createCommentId();

const getRandomComments = (maxOfMessages, msg) => {
  const countOfMessage = createUnicInteger(1, maxOfMessages);
  return countOfMessage() === 2 ? `${msg[1]} ${getRandomArrayElement(msg, 2)}` : `${getRandomArrayElement(msg)}`;
};

const generateComments = () => ({
  id: getUnicCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, settings.MAX_OF_PHOTOS)}.svg`,
  message: getRandomComments(settings.MAX_OF_MESSAGES, messages),
  name: getRandomArrayElement(names)
});

const generateUsers = () => ({
  id: getRandomId(),
  url: `photos/${getUnicPhoto()}.jpg`,
  description: descriptions[getUnicDesctiption()],
  likes: getRandomInteger(settings.MIN_OF_LIKES, settings.MAX_OF_LIKES),
  comments: Array.from({length: getRandomInteger(0, settings.MAX_OF_COMMENTS)}, generateComments),
});

export {generateUsers};
