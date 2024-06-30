import { isEscapeKey } from './util.js';
import {photos } from './main.js';

const fullPhoto = document.querySelector('.big-picture');
const commentCount = fullPhoto.querySelector('.social__comment-count');
const commentLoader = fullPhoto.querySelector('.social__comments-loader');
const picturesContainer = document.querySelector('.pictures');
const closeButton = fullPhoto.querySelector('.big-picture__cancel');
const commentsContainer = fullPhoto.querySelector('.social__comments');
const bigImageContainer = fullPhoto.querySelector('.big-picture__img');
const bigImage = bigImageContainer.querySelector('img');
const likesCount = fullPhoto.querySelector('.likes-count');
const comments = fullPhoto.querySelector('.comments-count');
const socialCaption = fullPhoto.querySelector('.social__caption');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    fullPhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const closeFullPhoto = () => {
  fullPhoto.classList.add('hidden');
  commentCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  commentsContainer.innerHTML = '';
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const getComment = ({avatar,name ,message}) => {
  const commentTemplateClone = commentTemplate.cloneNode(true);
  const commentAvatar = commentTemplateClone.querySelector('.social__picture');
  const commentText = commentTemplateClone.querySelector('.social__text');

  commentAvatar.src = `img/avatar-${avatar}.svg` ;
  commentAvatar.alt = name;
  commentText.textContent = message;
  return commentTemplateClone;
};

const renderComments = (items) => {
  const fragment = document.createDocumentFragment();

  items.forEach((comment) => {
    fragment.appendChild(getComment(comment));
  });
  commentsContainer.appendChild(fragment);
};

const matchFullPhoto = (photo) => {
  bigImage.src = photo.url;
  likesCount.textContent = photo.likes;
  comments.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;

  renderComments(photo.comments);
};

const openFullPhoto = (photo) => {
  fullPhoto.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  matchFullPhoto(photo);
};

picturesContainer.addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');

  if (picture) {
    const photo = photos.find((item) => item.id === Number(picture.dataset.id));
    openFullPhoto(photo);
  }
});

const onCLoseButtonClick = () => {
  closeButton.addEventListener('click', closeFullPhoto);
};

onCLoseButtonClick();

export {openFullPhoto, closeFullPhoto, matchFullPhoto};
