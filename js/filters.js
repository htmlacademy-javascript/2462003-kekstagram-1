import { renderPhotos } from './photos.js';
import { shuffle, debounce } from './util.js';

const AMOUNT_OF_RANDOM_PICTURES = 10;
const RERENDER_DELAY = 500;

const filter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filter.querySelector('#filter-default');
const randomButton = filter.querySelector('#filter-random');
const discussedButton = filter.querySelector('#filter-discussed');

const comparePictures = (picA, picB) => {
  const rankA = picA.comments.length;
  const rankB = picB.comments.length;
  return rankB - rankA;
};

const defaultFilter = (pictures) => pictures.slice();

const randomFilter = (pictures) => {
  const filteredPictures = pictures.slice();
  return shuffle(filteredPictures).slice(0, AMOUNT_OF_RANDOM_PICTURES);
};

const discussedFilter = (pictures) => {
  const filteredPictures = pictures.slice();
  return filteredPictures.sort(comparePictures);
};

const clearElements = () => {
  const elements = document.querySelectorAll('.picture');
  elements.forEach((element) => element.remove());
};

const removeActiveClass = () => {
  const activeFilterButton = filter.querySelector('.img-filters__button--active');
  activeFilterButton.classList.remove('img-filters__button--active');
};

const renderPicturesFilter = (pictures) => {
  clearElements();
  renderPhotos(pictures);
};

const initFilters = (pictures) => {
  filter.classList.remove('img-filters--inactive');
  filterForm.addEventListener('click', debounce((evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    removeActiveClass();
    if (evt.target === defaultButton) {
      defaultButton.classList.add('img-filters__button--active');
      renderPicturesFilter(defaultFilter(pictures));
    }
    if (evt.target === randomButton) {
      randomButton.classList.add('img-filters__button--active');
      renderPicturesFilter(randomFilter(pictures));
    }
    if (evt.target === discussedButton) {
      discussedButton.classList.add('img-filters__button--active');
      renderPicturesFilter(discussedFilter(pictures));
    }
  }, RERENDER_DELAY));
};
export { initFilters };
