import { isEscapeKey } from './util.js';
import { validate } from './validate-form.js';

const upload = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const cancelButton = document.querySelector('.img-upload__cancel');
const uploadImageElement = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const onDocumentKeydown = (evt) => {
  const activeElement = document.activeElement;
  if (isEscapeKey(evt) && activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
    evt.preventDefault();
    closePreview();
  }
};

function closePreview () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadForm.reset();
  uploadImageElement.className = '';
  uploadImageElement.style = '';
}

const onUploadChange = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  sliderContainer.classList.add('hidden');
};

upload.addEventListener('change', onUploadChange);

const onCloseButtonClick = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

cancelButton.addEventListener('click', onCloseButtonClick);

uploadForm.addEventListener('submit', (evt) => {
  if (!validate()) {
    evt.preventDefault();
  }
});
