import {getAllPosts} from '../get-all-post.js';
import {debounce} from './utils/debounce.js';
import {checkCurrentButton} from './utils/check-current-button.js';
import {settings} from '../settings.js';
import {filterButtons} from './variables.js';

let postsArray;
const debounceRandorPosts = debounce(getAllPosts, settings.DEBOUNCE_DELAY);
const getArray = (posts) => {
  postsArray = posts;
};
const onButtonChangePosts = (evt) => {
  const buttonActive = filterButtons.querySelector('.img-filters__button--active');
  if (evt.target.nodeName === 'BUTTON') {
    const currentButton = evt.target.id;
    buttonActive.classList.toggle('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    debounceRandorPosts(checkCurrentButton(currentButton, postsArray));
  }
};


filterButtons.addEventListener('click', onButtonChangePosts);

export {getArray};
