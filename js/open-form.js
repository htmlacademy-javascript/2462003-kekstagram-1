import { isEscapeKey } from './util.js';
import { resetValidator, validate } from './validate-form.js';
import { resetEffect } from './effect.js';
import { resetScale } from './scale.js';
import { sendData } from './api.js';
import { createMessage } from './message.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp'];

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const upload = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const cancelButton = document.querySelector('.img-upload__cancel');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const fileChooser = document.querySelector('.img-upload__input');
const uploadImage = document.querySelector('.preview__image');
const previewsList = document.querySelectorAll('.effects__preview');

const resetForm = () => {
  uploadForm.reset();
  resetEffect();
  resetScale();
  resetValidator();
};

const onDocumentKeydown = (evt) => {
  const activeElement = document.activeElement.className;
  const error = document.querySelector('.error__inner');
  if (isEscapeKey(evt) && !error && activeElement !== 'text__hashtags' && activeElement !== 'text__description') {
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

const matchPhoto = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    uploadImage.src = URL.createObjectURL(file);
    previewsList.forEach((preview) => {
      preview.style = `background-image: url('${URL.createObjectURL(file)}')`;
    });
  }
};

const onUploadChange = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  sliderContainer.classList.add('hidden');
  matchPhoto();
};

upload.addEventListener('change', onUploadChange);

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closePreview();
};

cancelButton.addEventListener('click', onCloseButtonClick);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (validate()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(() => {
          createMessage('success');
        })
        .catch(() => {
          createMessage('error');
        })
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit, closePreview, resetForm};
