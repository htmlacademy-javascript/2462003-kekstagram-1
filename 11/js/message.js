import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const messageTypeToTemplate = {
  success: successTemplate,
  error: errorTemplate,
};

const onDocumentClick = (evt) => {
  const message = document.querySelector('.message');
  const messageButton = document.querySelector('.message__button');
  if (!message.firstElementChild.contains(evt.target) || evt.target === messageButton) {
    deleteMessage();
  }
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    deleteMessage();
  }
};

function deleteMessage () {
  const message = document.querySelector('.message');
  if (message) {
    message.remove();
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
}

const createMessage = (string) => {
  const message = messageTypeToTemplate[string].cloneNode(true);
  document.body.appendChild(message);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

export {createMessage, deleteMessage};
