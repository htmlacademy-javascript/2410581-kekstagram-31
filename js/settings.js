// Основные настройки сайта

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
  ALERT_SHOW_TIME: 5000,
  MAX_RANDOM_POSTS: 10,
  DEBOUNCE_DELAY: 500,
  GET_DATA_LINK: 'https://31.javascript.htmlacademy.pro/kekstagram/data',
  SEND_DATA_LINK: 'https://31.javascript.htmlacademy.pro/kekstagram/',
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...',
  FILE_TYPES: ['jpg', 'jpeg', 'png', 'gif'],
};

// Настройки слайдера

const sliders = {
  'effect-chrome': {
    sliderValues: [0, 1, 0.1],
    styleProperty: 'grayscale',
    valueProperty: '',
  },
  'effect-sepia': {
    sliderValues: [0, 1, 0.1],
    styleProperty: 'sepia',
    valueProperty: '',
  },
  'effect-marvin': {
    sliderValues: [0, 100, 1],
    styleProperty: 'invert',
    valueProperty: '%',
  },
  'effect-phobos': {
    sliderValues: [0, 3, 0.1],
    styleProperty: 'blur',
    valueProperty: 'px',
  },
  'effect-heat': {
    sliderValues: [1, 3, 0.1],
    styleProperty: 'brightness',
    valueProperty: '',
  },
};

export {settings, sliders};
