import { isEscapeKey, isThereSpace, isThereOneElement } from './util.js';
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
    const spaceResults = [];
    hashtags.forEach((element) => {
      spaceResults.push(isThereSpace(element));
    });

    if (hashtags.length > 5) {
      return false;
    }

    if (!isThereOneElement(hashtags)) {
      return false;
    }

    const allSpacesTrue = spaceResults.every((result) => result === true);
    console.log(hashtags.length)
    if (allSpacesTrue) {
      const formatResults = [];
      hashtags.forEach((element) => {
        const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
        formatResults.push(regexp.test(element));
      });
      const allFormatTrue = formatResults.every((result) => result === true);
      if (allFormatTrue) {
        return true;
      }
    } return false;
  }
};
console.log(validateHashtag(hashtag.value))
pristine.addValidator(hashtag, validateHashtag, 'Должен соответствовать формату "#хештег", хештеги должны быть разделены пробелом');

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
