import { percentToNumber } from './util.js';

const INCREMENT = 25;
const DEFAULT_SCALE = '100%';

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

let currentScaleValue = DEFAULT_SCALE;
scaleValue.value = currentScaleValue;

const onSmallerButtonClick = () => {
  if (percentToNumber(currentScaleValue) > 25) {
    const number = percentToNumber(currentScaleValue);
    currentScaleValue = `${number - INCREMENT}%`;
    scaleValue.value = currentScaleValue;
  }
};

scaleSmallerButton.addEventListener('click', onSmallerButtonClick);
