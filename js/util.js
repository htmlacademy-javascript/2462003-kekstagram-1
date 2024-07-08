// Случайное число в диапозоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.trunc(Math.random() * (upper - lower + 1) + lower);
  return result;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const formatString = (value) => {
  const formatedString = value.toLowerCase().trim().split(' ');
  return formatedString.filter((element) => element !== '');
};

const percentToNumber = (string) => {
  const filteredString = string.split('').filter((element) => element !== '%');

  const sum = filteredString.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum;
};

export {getRandomArrayElement, getRandomInteger, isEscapeKey, formatString, percentToNumber};
