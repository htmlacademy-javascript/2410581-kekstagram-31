import {settings} from '../settings.js';

const getData = () => fetch(settings.GET_DATA_LINK)
  .then((response) => response.json())
  .then((posts) => posts);

export {getData};
