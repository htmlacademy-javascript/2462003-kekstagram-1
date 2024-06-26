import { isEscapeKey, isEnterKey } from './util.js';
const fullphoto = document.querySelector('.overlay');
const body = document.querySelector('body');
const commentCount = fullphoto.querySelector('.social__comment-count');
const commentLoader = fullphoto.querySelector('.social__comments-loader');
const picturesContainer = document.querySelector('.pictures');
const closeButton = fullphoto.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    fullphoto.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const getFullPhoto = () => {
  fullphoto.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeFullPhoto = () => {
  fullphoto.classList.add('hidden');
  commentCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.matches('img')) {
    getFullPhoto();
  }
});
picturesContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    getFullPhoto();
  }
});
closeButton.addEventListener('click', closeFullPhoto);

export {getFullPhoto, closeFullPhoto};
