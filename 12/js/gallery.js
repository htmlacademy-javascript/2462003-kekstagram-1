import { openFullPhoto } from './full-photo.js';

const photosContainer = document.querySelector('.pictures');

const addGalleryListener = (photos) => {
  photosContainer.addEventListener('click', (evt) => {
    const picture = evt.target.closest('.picture');

    if (picture) {
      const photo = photos.find((item) => item.id === Number(picture.dataset.id));
      openFullPhoto(photo);
    }
  });
};

export { addGalleryListener };
