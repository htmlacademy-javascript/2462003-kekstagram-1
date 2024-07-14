import { isEscapeKey } from './util.js';
import { validate } from './validate-form.js';
import { resetEffect } from './effect.js';
import { resetScale } from './scale.js';

const upload = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const cancelButton = document.querySelector('.img-upload__cancel');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const resetForm = () => {
  uploadForm.reset();
  resetEffect();
  resetScale();
};

const onDocumentKeydown = (evt) => {
  const activeElement = document.activeElement.className;
  if (isEscapeKey(evt) && activeElement !== 'text__hashtags' && activeElement !== 'text__description') {
    evt.preventDefault();
    closePreview();
  }
};

function closePreview () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetForm();
}

const onUploadChange = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  sliderContainer.classList.add('hidden');
};

upload.addEventListener('change', onUploadChange);

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closePreview();
};

cancelButton.addEventListener('click', onCloseButtonClick);

uploadForm.addEventListener('submit', (evt) => {
  if (!validate()) {
    evt.preventDefault();
  } else {
    evt.preventDefault();
    // const formData = new FormData(evt.target);
  }
});
