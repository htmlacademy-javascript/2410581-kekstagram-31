import {settings} from '../../settings.js';

const checkCurrentButton = (currentButton, posts) => {
  switch (currentButton) {
    case 'filter-default':
      return posts;
    case 'filter-random':
      return posts.toSorted(() => 0.5 - Math.random()).slice(0, settings.MAX_RANDOM_POSTS);
    case 'filter-discussed':
      return posts.toSorted((a,b) => b.comments.length - a.comments.length);
  }
};

export {checkCurrentButton};
