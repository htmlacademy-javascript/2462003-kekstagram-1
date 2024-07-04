import { isEscapeKey } from './util.js';
import '../vendor/pristine/pristine.min.js';

const upload = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const hashtag = uploadForm.querySelector('.text__hashtags');
const comment = uploadForm.querySelector('.text__description');
console.log(hashtag);
// const loadedPreview = uploadForm.querySelector('.img-upload__preview img');
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

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate() === true) {
    return;
  }
  {evt.preventDefault();}
  // console.log(pristine.validate())
});

const validateHashtag = (value) => {
  if (value.length > 0) {
    const hashtags = value.split(' ');
    console.log(hashtags)
    // const checkSpaces = /#{0}/;
    // checkSpaces.test(hashtags);
    // console.log(checkSpaces.test(hashtags));
    // const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
    // console.log(hashtag.value.length)
    // return regexp.test(value);
  }
};

pristine.addValidator(hashtag, validateHashtag, 'Должен соответствовать формату "#хештег"');

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
