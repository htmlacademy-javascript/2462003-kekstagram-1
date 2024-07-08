import { percentToNumber } from './util.js';

const INCREMENT = 25;
const DEFAULT_SCALE = '100%';

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const scalableImage = document.querySelector('.img-upload__preview img');

let currentScaleValue = DEFAULT_SCALE;
scaleValue.value = currentScaleValue;

const onSmallerButtonClick = () => {
  if (percentToNumber(currentScaleValue) > 25) {
    const number = percentToNumber(currentScaleValue);
    currentScaleValue = `${number - INCREMENT}%`;
    scaleValue.value = currentScaleValue;
    scalableImage.style = `transform: scale(${(number / 100) - (INCREMENT / 100)})`;
  }
};

scaleSmallerButton.addEventListener('click', onSmallerButtonClick);

const onBiggerButtonClick = () => {
  if (percentToNumber(currentScaleValue) < 100) {
    const number = percentToNumber(currentScaleValue);
    currentScaleValue = `${number + INCREMENT}%`;
    scaleValue.value = currentScaleValue;
    scalableImage.style = `transform: scale(${(number / 100) + (INCREMENT / 100)})`;
  }
};

scaleBiggerButton.addEventListener('click', onBiggerButtonClick);

export {onSmallerButtonClick, onBiggerButtonClick};
