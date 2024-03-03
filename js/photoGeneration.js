import {generationPost} from './generation.js';

const picturesConteiner = document.querySelector('.pictures');
const templatePicture = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPosts = generationPost();
const similarListFragment = document.createDocumentFragment();

similarPosts.forEach(({url, description, comments, likes}) => {
  const similarListElement = templatePicture.cloneNode(true);
  similarListElement.querySelector('.picture__img').src = url;
  similarListElement.querySelector('.picture__img').alt = description;
  similarListElement.querySelector('.picture__comments').textContent = comments.length;
  similarListElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.append(similarListElement);
});

picturesConteiner.append(similarListFragment);
