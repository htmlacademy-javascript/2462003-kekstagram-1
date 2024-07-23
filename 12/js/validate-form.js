import { formatString } from './util.js';

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
});

const validateText = (value) => value.length <= COMMENT_MAX_LENGTH;

pristine.addValidator(uploadForm.querySelector('.text__description'), validateText, `Не длиннее ${COMMENT_MAX_LENGTH} символов`);

const validateHashtagSpaces = (value) => {
  const hashtags = formatString(value);
  return hashtags.every((element) => element.match(/#/g) && element.match(/#/g).length === 1);
};

const validateHashtagLength = (value) => {
  const hashtags = formatString(value);
  return hashtags.length <= AMOUNT_OF_HASHTAGS;
};

const validateHashtagRepeats = (value) => {
  const hashtags = formatString(value);
  const uniqueHashtags = new Set(hashtags);
  return uniqueHashtags.size === hashtags.length;
};

const validateHashtagFormat = (value) => {
  const hashtags = formatString(value);
  const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
  return hashtags.every((element) => regexp.test(element));
};

const resetValidator = () => {
  pristine.reset();
};

pristine.addValidator(hashtag, validateHashtagSpaces, 'Хештеги должны быть разделены пробелами', 6);
pristine.addValidator(hashtag, validateHashtagLength, 'Не больше 5 хештегов', 4, true);
pristine.addValidator(hashtag, validateHashtagRepeats, 'Хештеги не должны повторяться', 3, true);
pristine.addValidator(hashtag, validateHashtagFormat, 'Хештеги должны быть формата #хештег и не длиннее 20 символов', 5, true);

const validate = () => pristine.validate();

export { validate, resetValidator };
