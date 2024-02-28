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

const createCommentId = () => {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
};

const getRandomArrayElement = (elements, firstElem = 0) => elements[getRandomInteger(firstElem, elements.length - 1)];

export {getRandomInteger, createUnicInteger, createCommentId, getRandomArrayElement};
