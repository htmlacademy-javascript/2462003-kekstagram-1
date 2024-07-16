import { isEscapeKey, showAlert } from './util.js';
import { validate } from './validate-form.js';
import { resetEffect } from './effect.js';
import { resetScale } from './scale.js';
import { sendData } from './api.js';
import { createMessage } from './upload-popups.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const Templates = {
  SUCCESS: document.querySelector('#success').content.querySelector('.success'),
  ERROR: document.querySelector('#error').content.querySelector('.error'),
};

const upload = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const cancelButton = document.querySelector('.img-upload__cancel');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const submitButton = uploadForm.querySelector('.img-upload__submit');

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

document.addEventListener('keydown', onDocumentKeydown);

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
        .then(createMessage(Templates.SUCCESS))
        .catch((err) => {
          showAlert(err.message);
          createMessage(Templates.ERROR);
        })
        .finally(unblockSubmitButton());
    }
  });
};

export {setUserFormSubmit, closePreview, resetForm};
