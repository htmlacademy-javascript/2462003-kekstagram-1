import { renderPhotos } from './photos.js';
import { shuffle, debounce } from './util.js';
import { removePhotos } from './photos.js';

const AMOUNT_OF_RANDOM_PHOTOS = 10;
const RERENDER_DELAY = 500;

const filter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filter.querySelector('#filter-default');
const randomButton = filter.querySelector('#filter-random');
const discussedButton = filter.querySelector('#filter-discussed');

const getPhotosCommentsLength = (photo) => photo.comments.length;

const compareAmountOfComments = (photoA, photoB) => {
  const amountA = getPhotosCommentsLength(photoA);
  const amountB = getPhotosCommentsLength(photoB);
  return amountB - amountA;
};

const getDefaultPhotos = (photos) => photos.slice();

const getRandomPhotos = (photos) => {
  const filteredPhotos = photos.slice();
  return shuffle(filteredPhotos).slice(0, AMOUNT_OF_RANDOM_PHOTOS);
};

const sortByComments = (photos) => {
  const filteredPhotos = photos.slice();
  return filteredPhotos.sort(compareAmountOfComments);
};

const removeActiveClass = () => {
  const activeFilterButton = filter.querySelector('.img-filters__button--active');
  activeFilterButton.classList.remove('img-filters__button--active');
};

const renderFilteredPhotos = (photos) => {
  removePhotos();
  renderPhotos(photos);
};

const initFilters = (photos) => {
  filter.classList.remove('img-filters--inactive');
  filterForm.addEventListener('click', debounce((evt) => {
    removeActiveClass();
    evt.target.classList.add('img-filters__button--active');
    const getFilter = () => {
      switch(evt.target) {
        case defaultButton :
          return getDefaultPhotos(photos);
        case randomButton :
          return getRandomPhotos(photos);
        case discussedButton :
          return sortByComments(photos);
        default :
          return getDefaultPhotos(photos);
      }
    };
    renderFilteredPhotos(getFilter());
  }, RERENDER_DELAY));
};
export { initFilters };
