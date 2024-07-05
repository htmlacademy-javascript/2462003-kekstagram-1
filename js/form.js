import { isEscapeKey, isThereSpace, isThereOneElement } from './util.js';
import '../vendor/pristine/pristine.min.js';

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
}

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);

const validateText = (value) => value.length <= 14;

pristine.addValidator(uploadForm.querySelector('.text__description'), validateText, 'Не длиннее 14 символов');

const validateHashtagSpaces = (value) => {
  if (value.length > 0) {
    const hashtags = value.split(' ');
    const spaceResults = [];
    hashtags.forEach((element) => {
      spaceResults.push(isThereSpace(element));
    });
    const allSpacesTrue = spaceResults.every((result) => result === true);
    if (allSpacesTrue) {
      return true;
    } return false;
  }
};

const validateHashtagLength = (value) => {
  const hashtags = value.split(' ');
  if (hashtags.length > 5) {
    return false;
  } return true;
};

const validateHashtagRepeats = (value) => {
  const hashtags = value.split(' ');
  if (!isThereOneElement(hashtags)) {
    return false;
  } return true;
};

const validateHashtagFormat = (value) => {
  const hashtags = value.split(' ');
  const formatResults = [];
  hashtags.forEach((element) => {
    const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
    formatResults.push(regexp.test(element));
  });
  const allFormatTrue = formatResults.every((result) => result === true);
  if (allFormatTrue) {
    return true;
  }
  return false;
};

pristine.addValidator(hashtag, validateHashtagSpaces, 'Хештеги должны быть разделены пробелами', 5, true);
pristine.addValidator(hashtag, validateHashtagLength, 'Не больше 5 хештегов', 4, true);
pristine.addValidator(hashtag, validateHashtagRepeats, 'Хештеги не должны повторяться', 3, true);
pristine.addValidator(hashtag, validateHashtagFormat, 'Хештеги должны быть формата #хештег и не длиннее 20 символов', 2, true);

uploadForm.addEventListener('submit', (evt) => {
  if (pristine.validate() === true) {
    return;
  }
  {evt.preventDefault();}
});

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
