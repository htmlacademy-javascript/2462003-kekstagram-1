import { isEscapeKey } from './util.js';

const fullPhoto = document.querySelector('.big-picture');
const commentCount = fullPhoto.querySelector('.social__comment-count');
const commentLoader = fullPhoto.querySelector('.social__comments-loader');
const closeButton = fullPhoto.querySelector('.big-picture__cancel');
const commentsContainer = fullPhoto.querySelector('.social__comments');
const bigImageContainer = fullPhoto.querySelector('.big-picture__img');
const bigImage = bigImageContainer.querySelector('img');
const likesCount = fullPhoto.querySelector('.likes-count');
const commentsCount = fullPhoto.querySelector('.comments-count');
const socialCaption = fullPhoto.querySelector('.social__caption');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPhoto();
  }
};

function closeFullPhoto () {
  fullPhoto.classList.add('hidden');
  commentCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  commentsContainer.innerHTML = '';
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const getComment = ({avatar, name, message}) => {
  const newComment = commentTemplate.cloneNode(true);
  const commentAvatar = newComment.querySelector('.social__picture');
  const commentText = newComment.querySelector('.social__text');

  commentAvatar.src = `img/avatar-${avatar}.svg` ;
  commentAvatar.alt = name;
  commentText.textContent = message;
  return newComment;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.appendChild(getComment(comment));
  });
  commentsContainer.appendChild(fragment);
};

const matchFullPhoto = (photo) => {
  bigImage.src = photo.url;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
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

const onCloseButtonClick = () => {
  closeFullPhoto();
};

closeButton.addEventListener('click', onCloseButtonClick);

export {openFullPhoto};
