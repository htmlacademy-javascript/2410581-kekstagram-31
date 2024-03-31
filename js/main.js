import {getDataError} from './errors/get-data-error.js';
import {getData} from './api/get-data.js';
import {getAllPosts} from './utils/get-all-post.js';
import {makeEventClick} from './modal/utils/make-event-click.js';
import {getArray} from './filters/index.js';
import {onButtonOpenUploadModal} from './modal/index.js';
import {filterButtons, uploadFile} from './variables.js';

uploadFile.addEventListener('change', onButtonOpenUploadModal);

getData()
  .then((posts) => {
    getAllPosts(posts);
    makeEventClick(posts);
    getArray(posts);
  })
  .then(() => filterButtons.classList.remove('img-filters--inactive'))
  .catch(() => getDataError());
