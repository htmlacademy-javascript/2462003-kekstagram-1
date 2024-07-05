import { isThereSpace, isThereOneElement, removeSpaces } from './util.js';

const AMOUNT_OF_HASHTAGS = 5;
const COMMENT_MAX_LENGTH = 140;
const uploadForm = document.querySelector('.img-upload__form');
const hashtag = uploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);

const validateText = (value) => value.length <= COMMENT_MAX_LENGTH;

pristine.addValidator(uploadForm.querySelector('.text__description'), validateText, 'Не длиннее 14 символов');

// const validateHashtagRequired = (value) => value.length === 0;

const validateHashtagSpaces = (value) => {
  if (value.length > 0) {
    const hashtags = value.split(' ');
    return hashtags.every((element) => element.match(/#/g).length === 1);
  }
};

const validateHashtagLength = (value) => {
  const hashtags = value.split(' ');
  console.log(hashtags)
  const hashtagsWithoutSpaces = removeSpaces(hashtags);
  return hashtagsWithoutSpaces.length <= AMOUNT_OF_HASHTAGS;
};

const validateHashtagRepeats = (value) => {
  const hashtags = value.split(' ');
  const hashtagsWithoutSpaces = removeSpaces(hashtags);
  return isThereOneElement(hashtagsWithoutSpaces);
};

const validateHashtagFormat = (value) => {
  const hashtags = value.split(' ');
  const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
  return hashtags.every((element) => regexp.test(element));
};

// pristine.addValidator(hashtag, validateHashtagRequired, '', 20, true);
pristine.addValidator(hashtag, validateHashtagSpaces, 'Хештеги должны быть разделены пробелами', 5, true);
pristine.addValidator(hashtag, validateHashtagLength, 'Не больше 5 хештегов', 4, true);
pristine.addValidator(hashtag, validateHashtagRepeats, 'Хештеги не должны повторяться', 3, true);
pristine.addValidator(hashtag, validateHashtagFormat, 'Хештеги должны быть формата #хештег и не длиннее 20 символов', 2, true);

export { pristine };
