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

scaleField.value = `${Scale.DEFAULT}%`;

const setScale = (value) => {
  scaleField.value = `${value}%`;
  uploadImage.style.transform = `scale(${value / 100})`;
};

const onSmallerButtonClick = () => {
  if (parseInt(scaleField.value, 10) > Scale.MIN) {
    const number = parseInt(scaleField.value, 10);
    scaleField.value = `${number - Scale.STEP}`;
    setScale(scaleField.value);
  }
};

const onBiggerButtonClick = () => {
  if (parseInt(scaleField.value, 10) < Scale.MAX) {
    const number = parseInt(scaleField.value, 10);
    scaleField.value = `${number + Scale.STEP}`;
    setScale(scaleField.value);
  }
};

const initScale = () => {
  scaleSmallerButton.addEventListener('click', onSmallerButtonClick);
  scaleBiggerButton.addEventListener('click', onBiggerButtonClick);
};

export {initScale, Scale, setScale};
