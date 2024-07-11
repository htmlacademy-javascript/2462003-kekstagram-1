const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT: 100
};

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview img');

const resetScale = () => {
  scaleField.value = `${Scale.DEFAULT}%`;
};

const setScale = (value) => {
  scaleField.value = `${value}%`;
  uploadImage.style.transform = `scale(${value / 100})`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleField.value, 10);
  if (currentValue > Scale.MIN) {
    setScale(currentValue - Scale.STEP);
  }
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleField.value, 10);
  if (currentValue < Scale.MAX) {
    setScale(currentValue + Scale.STEP);
  }
};

const initScale = () => {
  resetScale();
  scaleSmallerButton.addEventListener('click', onSmallerButtonClick);
  scaleBiggerButton.addEventListener('click', onBiggerButtonClick);
};

export {initScale, resetScale};
