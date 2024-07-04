// Случайное число в диапозоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.trunc(Math.random() * (upper - lower + 1) + lower);
  return result;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';
// Есть ли пробел в массиве хештегов
const isThereSpace = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i] === '#' ? 1 : 0;
    if (count > 1) {
      return false;
    }
  } return true;
};
export {getRandomArrayElement, getRandomInteger, isEscapeKey, isThereSpace};
