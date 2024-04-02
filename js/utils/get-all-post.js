import {picturesList, templatePicture} from '../variables.js';

const getAllPosts = (posts) => {
  const similarListFragment = document.createDocumentFragment();
  const pictures = picturesList.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());

  posts.forEach(({id, url, description, comments, likes}) => {
    const similarListElement = templatePicture.cloneNode(true);
    similarListElement.dataset.pictureId = id;
    similarListElement.querySelector('.picture__img').src = url;
    similarListElement.querySelector('.picture__img').alt = description;
    similarListElement.querySelector('.picture__comments').textContent = comments.length;
    similarListElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.append(similarListElement);
  });
  picturesList.append(similarListFragment);
};

export {getAllPosts};
