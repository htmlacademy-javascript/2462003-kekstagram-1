import { percentToNumber } from "./util.js";

const INCREMENT = 25;

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
let currentScaleValue = '100%';
scaleValue.value = currentScaleValue;

const onSmallerButtonClick = () => {
  if (percentToNumber(currentScaleValue) > 25) {
    const number = percentToNumber(currentScaleValue);
    currentScaleValue = `${number - INCREMENT}%`;
    scaleValue.value = currentScaleValue;
  }
};

scaleSmallerButton.addEventListener('click', onSmallerButtonClick);
