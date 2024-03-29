import {getDataError} from './errors/get-data-error.js';
import {getData} from './api/get-data.js';
import {getAllPosts} from './get-all-post.js';
import {makeEventClick} from './modal/index.js';
import {getArray} from './filters/index.js';
import {filterButtons} from './filters/variables.js';

getData()
  .then((posts) => {
    getAllPosts(posts);
    makeEventClick(posts);
    getArray(posts);
  })
  .then(() => filterButtons.classList.remove('img-filters--inactive'))
  .catch(() => getDataError());
