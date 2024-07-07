import { isThereSpace, removeSpaces, formatString } from './util.js';

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

pristine.addValidator(uploadForm.querySelector('.text__description'), validateText, `Не длиннее ${COMMENT_MAX_LENGTH} символов`);

const validateHashtagSpaces = (value) => {
  const hashtags = value.split(' ');
  const spaceResults = [];
  hashtags.forEach((element) => {
    spaceResults.push(isThereSpace(element));
  });

  return spaceResults.every((result) => result === true);
};

const validateHashtagLength = (value) => {
  const hashtags = value.split(' ');
  const hashtagsWithoutSpaces = removeSpaces(hashtags);
  return hashtagsWithoutSpaces.length <= AMOUNT_OF_HASHTAGS;
};

const validateHashtagRepeats = (value) => {
  const hashtags = formatString(value).split(' ');
  const hashtagsWithoutSpaces = removeSpaces(hashtags);
  const uniqueHashtags = new Set(hashtagsWithoutSpaces);
  return uniqueHashtags.size === hashtagsWithoutSpaces.length;
};

const validateHashtagFormat = (value) => {
  const hashtags = formatString(value).split(' ');
  const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
  const hashtagsWithoutSpaces = removeSpaces(hashtags);
  return hashtagsWithoutSpaces.every((element) => regexp.test(element));
};

pristine.addValidator(hashtag, validateHashtagSpaces, 'Хештеги должны быть разделены пробелами', 6);
pristine.addValidator(hashtag, validateHashtagLength, 'Не больше 5 хештегов', 4, true);
pristine.addValidator(hashtag, validateHashtagRepeats, 'Хештеги не должны повторяться', 3, true);
pristine.addValidator(hashtag, validateHashtagFormat, 'Хештеги должны быть формата #хештег и не длиннее 20 символов', 5, true);

export { pristine };
