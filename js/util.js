// Случайное число в диапозоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.trunc(Math.random() * (upper - lower + 1) + lower);
  return result;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const removeSpaces = (arr) => arr.filter((element) => element !== '');

const isThereOneElement = (arr) => {
  const uniqSet = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] === arr[i]) {
        uniqSet.add(arr[i]);
      }
    }
  }
  const uniq = Array.from(uniqSet);
  if (uniq.length === arr.length) {
    return true;
  } return false;
};

const formatString = (value) => value.toLowerCase().trim();

export {getRandomArrayElement, getRandomInteger, isEscapeKey, isThereOneElement, removeSpaces, formatString};
