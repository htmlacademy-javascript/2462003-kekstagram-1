import { isEscapeKey } from './util.js';

const DEFAULT_COMMENT_AMOUNT = 5;

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
let startCommentIndex = 0;
let endCommentIndex = DEFAULT_COMMENT_AMOUNT;
let comments = [];

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPhoto();
  }
};

function closeFullPhoto () {
  startCommentIndex = 0;
  endCommentIndex = DEFAULT_COMMENT_AMOUNT;
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
  if (endCommentIndex >= comments.length) {
    commentLoader.classList.add('hidden');
    endCommentIndex = comments.length;
  }

  const fragment = document.createDocumentFragment();
  const newComments = comments.slice(startCommentIndex, endCommentIndex);

  newComments .forEach((comment) => {
    fragment.appendChild(getComment(comment));
  });

  commentsContainer.appendChild(fragment);
  commentCount.innerHTML = `${endCommentIndex} из ${comments.length} комментариев`;
};

const matchFullPhoto = (photo) => {
  bigImage.src = photo.url;
  likesCount.textContent = photo.likes;
  socialCaption.textContent = photo.description;
  renderComments();
};

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
  endCommentIndex += DEFAULT_COMMENT_AMOUNT;
  startCommentIndex += DEFAULT_COMMENT_AMOUNT;
  renderComments();
};

commentLoader.addEventListener('click', onCommentLoaderClick);

export {openFullPhoto};
