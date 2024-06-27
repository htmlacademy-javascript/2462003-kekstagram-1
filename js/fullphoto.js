import { isEscapeKey, isEnterKey } from './util.js';
import {photos } from './main.js';

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

const matchFullPhoto = (evt) => {
  const photo = photos.find((item) => item.id === Number(evt.target.closest('.picture').dataset.id));
  const bigImageContainer = fullphoto.querySelector('.big-picture__img');
  const bigImage = bigImageContainer.querySelector('img');
  const likesCount = fullphoto.querySelector('.likes-count');
  const comments = fullphoto.querySelector('.comments-count');
  const socialCaption = fullphoto.querySelector('.social__caption');

  bigImage.src = photo.url;
  likesCount.textContent = photo.likes;
  comments.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;

  const commentsContainer = fullphoto.querySelector('.social__comments');
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();

  photo.comments.forEach(({avatar,name ,message }) => {
    const commentTemplateClone = commentTemplate.cloneNode(true);
    const commentAvatar = commentTemplateClone.querySelector('.social__picture');
    const commentText = commentTemplateClone.querySelector('.social__text');

    commentAvatar.src = `img/avatar-${avatar}.svg` ;
    commentAvatar.alt = name;
    commentText.textContent = message;
    fragment.appendChild(commentTemplateClone);
  });
  commentsContainer.appendChild(fragment);
};

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    getFullPhoto();
    matchFullPhoto(evt);
    // console.log(evt.target);
  }
});
picturesContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    getFullPhoto();
  }
});
closeButton.addEventListener('click', closeFullPhoto);

export {getFullPhoto, closeFullPhoto};
