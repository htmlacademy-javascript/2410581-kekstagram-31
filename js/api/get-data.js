import {getAllPosts} from '../get-all-post.js';
import {getDataError} from './errors/get-data-error.js';
import {settings} from '../settings.js';

const getData = () => {
  fetch(settings.GET_DATA_LINK)
    .then((response) => response.json())
    .then((posts) => getAllPosts(posts))
    .catch(() => {
      getDataError();
    });
};

export {getData};
