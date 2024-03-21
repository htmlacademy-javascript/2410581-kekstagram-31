const settings = {
  MAX_USERS: 25,
  MIN_OF_LIKES: 15,
  MAX_OF_LIKES: 200,
  MAX_OF_COMMENTS: 30,
  MAX_OF_PHOTOS: 6,
  MAX_OF_MESSAGES: 2,
  MAX_STARTING_COMMENTS: 5,
  HASHTAG_CURRENT: /(^#([a-zа-яё0-9]{1,19})$)/i,
  MAX_LENGTH_DESCTIPTION: 140,
  MAX_HASHTAGS: 5,
  MAX_SCALE: 100,
  MIN_SCALE: 25,
  STEP_SCALE: 25,
};

const filters = {
  'effect-chrome': {
    change: [0, 1, 0.1],
    styleProperty: 'grayscale',
    valueProperty: '',
  },
  'effect-sepia': {
    change: [0, 1, 0.1],
    styleProperty: 'sepia',
    valueProperty: '',
  },
  'effect-marvin': {
    change: [0, 100, 1],
    styleProperty: 'invert',
    valueProperty: '%',
  },
  'effect-phobos': {
    change: [0, 3, 0.1],
    styleProperty: 'blur',
    valueProperty: 'px',
  },
  'effect-heat': {
    change: [1, 3, 0.1],
    styleProperty: 'brightness',
    valueProperty: '',
  },
};

export {settings, filters};
