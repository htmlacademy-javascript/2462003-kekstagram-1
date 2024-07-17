import { openFullPhoto } from './full-photo.js';

const picturesContainer = document.querySelector('.pictures');

const addGalleryListener = (photos) => {
  picturesContainer.addEventListener('click', (evt) => {
    const picture = evt.target.closest('.picture');

    if (picture) {
      const photo = photos.find((item) => item.id === Number(picture.dataset.id));
      openFullPhoto(photo);
    }
  });
};
export { addGalleryListener };
