import { renderPhotos } from './photos.js';
import { shuffle, debounce } from './util.js';
import { removePhotos } from './photos.js';

const AMOUNT_OF_RANDOM_PHOTOS = 10;
const RERENDER_DELAY = 500;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');

const comparePhotoComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const getRandomPhotos = (photos) => shuffle([...photos]).slice(0, AMOUNT_OF_RANDOM_PHOTOS);

const sortByComments = (photos) => [...photos].sort(comparePhotoComments);

const removeActiveClass = () => {
  const activeFilterButton = filter.querySelector('.img-filters__button--active');
  activeFilterButton.classList.remove('img-filters__button--active');
};

const getFilteredPhotos = (photos, filterName) => {
  switch(filterName) {
    case Filter.RANDOM:
      return getRandomPhotos(photos);
    case Filter.DISCUSSED:
      return sortByComments(photos);
    default:
      return [...photos];
  }
};

const renderFilteredPhotos = debounce((photos) => {
  removePhotos();
  renderPhotos(photos);
}, RERENDER_DELAY);

const initFilters = (photos) => {
  filter.classList.remove('img-filters--inactive');
  filterForm.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      removeActiveClass();
      evt.target.classList.add('img-filters__button--active');
      renderFilteredPhotos(getFilteredPhotos(photos, evt.target.id));
    }
  });
};

export { initFilters };
