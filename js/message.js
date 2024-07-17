import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const messageTypeToTemplate = {
  success: successTemplate,
  error: errorTemplate,
};

const onDocumentClick = (evt) => {
  const message = document.querySelector('.message');
  if (!message.firstElementChild.contains(evt.target)) {
    deleteMessage();
  }
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    deleteMessage();
  }
};

function deleteMessage () {
  const elementToDelete = document.querySelector('.message');
  if (elementToDelete) {
    elementToDelete.remove();
    elementToDelete.removeEventListener('click', onPopupButtonClick);
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
}

function onPopupButtonClick (evt) {
  if (evt.target.closest('button')) {
    deleteMessage();
  }
}

const createMessage = (string) => {
  const message = messageTypeToTemplate[string].cloneNode(true);
  document.body.appendChild(message);
  message.addEventListener('click', onPopupButtonClick);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

export {createMessage, deleteMessage};
