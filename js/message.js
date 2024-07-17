
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const messageTypeToTemplate = {
  success: successTemplate,
  error: errorTemplate,
};

const deleteMessage = () => {
  const elementToDelete = document.querySelector('.message');
  if (elementToDelete) {
    elementToDelete.remove();
    elementToDelete.removeEventListener('click', onPopupButtonClick);
  }
};

function onPopupButtonClick (evt) {
  if (evt.target.closest('button')) {
    deleteMessage();
  }
}

const createMessage = (string) => {
  const message = messageTypeToTemplate[string].cloneNode(true);
  document.body.appendChild(message);
  message.addEventListener('click', onPopupButtonClick);
};

export {createMessage, deleteMessage};
