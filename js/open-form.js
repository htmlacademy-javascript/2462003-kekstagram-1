import { isEscapeKey } from './util.js';
import { pristine } from './validate-form.js';

const upload = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const hashtag = uploadForm.querySelector('.text__hashtags');
const comment = uploadForm.querySelector('.text__description');
const cancelButton = document.querySelector('.img-upload__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePreview();
  }
};

function closePreview () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  upload.value = '';
  uploadForm.reset();
}

const onUploadChange = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

upload.addEventListener('change', onUploadChange);

const onCloseButtonClick = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

cancelButton.addEventListener('click', onCloseButtonClick);

const onInputFocusin = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onInputFocusout = () => {
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadForm.addEventListener('focusin', (evt) => {
  if (evt.target === hashtag || evt.target === comment) {
    onInputFocusin();
  }
});

uploadForm.addEventListener('focusout', (evt) => {
  if (evt.target === hashtag || evt.target === comment) {
    onInputFocusout();
  }
});

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
