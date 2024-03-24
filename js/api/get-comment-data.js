import {settings} from '../settings.js';

const getCommentData = (id, func) => {
  fetch(settings.GET_DATA_LINK)
    .then((response) => response.json())
    .then((posts) => {
      func(posts[id].comments);
    });
};

export {getCommentData};
