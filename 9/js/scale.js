const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT: 100
};

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const fieldElement = document.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview img');

let currentScaleValue = Scale.DEFAULT;

fieldElement.value = currentScaleValue;

const setScale = (value) => {
  fieldElement.value = `${value}`;
  uploadImageElement.style.transform = `scale(${parseInt(value, 10) / 100})`;
};

const onSmallerButtonClick = () => {
  if (parseInt(currentScaleValue, 10) > Scale.MIN) {
    const number = parseInt(currentScaleValue, 10);
    currentScaleValue = `${number - Scale.STEP}%`;
    setScale(currentScaleValue);
  }
};

const onBiggerButtonClick = () => {
  if (parseInt(currentScaleValue, 10) < Scale.MAX) {
    const number = parseInt(currentScaleValue, 10);
    currentScaleValue = `${number + Scale.STEP}%`;
    setScale(currentScaleValue);
  }
};

const initScale = () => {
  scaleSmallerButton.addEventListener('click', onSmallerButtonClick);
  scaleBiggerButton.addEventListener('click', onBiggerButtonClick);
};

export {initScale};
