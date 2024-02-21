const names = [
  'Александр',
  'Анна',
  'Борис',
  'Виктория',
  'Владимир',
  'Галина',
  'Дмитрий',
  'Евгения',
  'Екатерина',
  'Иван',
  'Ирина',
  'Константин',
  'Лариса',
  'Леонид',
  'Маргарита',
  'Михаил',
  'Наталья',
  'Николай',
  'Ксения',
  'Павел',
  'Светлана',
  'Сергей',
  'Татьяна',
  'Юрий',
  'Яна',
  'Ярослав'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const descriptions = [
  'Задумчивый взгляд на фоне потрясающего заката.',
  'Смех и радость на празднике.',
  'Оживленная городская улица с высотными зданиями.',
  'Дружеский пикник на природе с ароматным шашлыком.',
  'Загадочная улыбка и блеск в глазах у прекрасной девушки.',
  'Спокойствие и умиротворение: озеро в окружении гор.',
  'Радость победы: спортсмен на пьедестале почета.',
  'Уютная атмосфера домашнего вечера у камина.',
  'Экстремальное развлечение: прыжок с парашютом.',
  'Яркие краски осеннего леса: золотые листья и красные ягоды.',
  'Прогулка на лошадях по зеленому полю: гармония с природой.',
  'Неожиданный кадр: забавное выражение лица кота.',
  'Романтический ужин на крыше под звездным небом.',
  'Бескрайние просторы моря и одинокий парусник на горизонте.',
  'Летний дождь: свежесть и чистота после грозы.',
  'Творческий процесс создания картины: художник и его муза.',
  'Уличные музыканты, играющие веселую мелодию для прохожих.',
  'Зимние развлечения: веселые горки и радостные крики детей.',
  'Завораживающий вид на ночной город с высоты птичьего полета.',
  'Заснеженные деревья в зимнем лесу, окутанные лунным светом.',
  'Девушка на фоне заката, танцует с длинными лентами в руках.',
  'Стая птиц в полете над рекой, отражаясь в зеркальной поверхности.',
  'Крупный план цветка розы с каплями росы на нежных лепестках.',
  'Рыжий кот на подоконнике, наблюдающий за падающим снегом.',
  'Разноцветные листья, собранные в осенний букет, на деревянном столе.',
  'Группа друзей, запускающих воздушные змеи на фоне голубого неба.'
];

const maxUsers = 25;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createUnicInteger = (min, max) => {
  const previousValues = [];

  return function() {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomId = createUnicInteger(1, maxUsers);
const getUnicPhoto = createUnicInteger(1, maxUsers);
const getUnicDesctiption = createUnicInteger(1, descriptions.length - 1);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createCommentId = () => {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
};

const getUnicCommentId = createCommentId();

const generateComments = () => ({
  id: getUnicCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names)
});

const generateUsers = () => ({
  id: getRandomId(),
  url: `photos/${getUnicPhoto()}.jpg`,
  description: descriptions[getUnicDesctiption()],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, generateComments),
});

const users = Array.from({length: maxUsers}, generateUsers);

console.log(users); // eslint-disable-line
