import { isEscapeKey } from './util.js';
import { resetForm } from './open-form.js';

const createMessage = (type) => {
  const fragment = document.createDocumentFragment();
  const message = type.cloneNode(true);
  message.dataset.type = 'popup';
  fragment.appendChild(message);
  document.body.appendChild(fragment);
};

const deleteElement = () => {
  const elementToDelete = document.querySelector('[data-type="popup"');
  if (elementToDelete) {
    elementToDelete.remove();
  }
};

const onPopupButtonClick = (evt) => {
  const elementToDelete = document.querySelector('[data-type="popup"');
  if (evt.target.closest('button')) {
    deleteElement();
  } if (elementToDelete && elementToDelete.className !== 'error') {
    resetForm();
  }
};

document.addEventListener('click', onPopupButtonClick);

const onDeleteKeydown = (evt) => {
  const elementToDelete = document.querySelector('[data-type="popup"');
  if (isEscapeKey(evt) && elementToDelete) {
    deleteElement();
    if (elementToDelete.className !== 'error') {
      resetForm();
    }
  }
};

document.addEventListener('keydown', onDeleteKeydown);
export {createMessage};
