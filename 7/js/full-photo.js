import { isEscapeKey } from './util.js';

const fullPhoto = document.querySelector('.big-picture');
const commentCount = fullPhoto.querySelector('.social__comment-count');
const commentLoader = fullPhoto.querySelector('.social__comments-loader');
const closeButton = fullPhoto.querySelector('.big-picture__cancel');
const commentsContainer = fullPhoto.querySelector('.social__comments');
const bigImageContainer = fullPhoto.querySelector('.big-picture__img');
const bigImage = bigImageContainer.querySelector('img');
const likesCount = fullPhoto.querySelector('.likes-count');
const socialCaption = fullPhoto.querySelector('.social__caption');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
let firstComment = 0;
let lastComment = 5;
let comments = [];

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPhoto();
  }
};

function closeFullPhoto () {
  firstComment = 0;
  lastComment = 5;
  fullPhoto.classList.add('hidden');
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

const renderComments = () => {
  if (lastComment >= comments.length) {
    commentLoader.classList.add('hidden');
    lastComment = comments.length;
  }

  const fragment = document.createDocumentFragment();
  const commentsToRender = comments.slice(firstComment, lastComment);

  commentsToRender.forEach((comment) => {
    fragment.appendChild(getComment(comment));
  });

  commentsContainer.appendChild(fragment);
  commentCount.innerHTML = `${lastComment} из ${comments.length} комментариев`;
};

function matchFullPhoto (photo) {
  bigImage.src = photo.url;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;
  renderComments();
}

const openFullPhoto = (photo) => {
  fullPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  commentLoader.classList.remove('hidden');
  comments = photo.comments;
  matchFullPhoto(photo);
};

const onCloseButtonClick = () => {
  closeFullPhoto();
};

closeButton.addEventListener('click', onCloseButtonClick);

const onCommentLoaderClick = () => {
  lastComment = lastComment + 5;
  firstComment = firstComment + 5;
  renderComments();
};

commentLoader.addEventListener('click', onCommentLoaderClick);

export {openFullPhoto};
