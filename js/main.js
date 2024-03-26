import { getDataError } from './errors/get-data-error.js';
import { getData } from './api/get-data.js';
import { getAllPosts } from './get-all-post.js';
import {makeEventClick} from './modal/index.js';

getData()
  .then((posts) => getAllPosts(posts))
  .catch(() => getDataError());
makeEventClick();
