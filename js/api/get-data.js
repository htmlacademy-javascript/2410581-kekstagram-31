import {getAllPosts} from '../get-all-post.js';

const getData = () => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((posts) => getAllPosts(posts));
};

export {getData};
