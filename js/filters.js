import { renderPhotos } from './photos.js';
import { shuffle } from './util.js';

const filter = document.querySelector('.img-filters');

const activateFilters = () => {
  filter.classList.remove('img-filters--inactive');
};

export {activateFilters};

const clearElements = () => {
  const elements = document.querySelectorAll('.picture');
  console.log(elements)
  elements.forEach((element) => element.remove());
};
const onFilterButtonClick = (evt) => {
  const activeFilterButton = document.querySelector('.img-filters__button--active');
  activeFilterButton.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
  console.log(document.activeElement)
  // clearElements()
};

filter.addEventListener('click', onFilterButtonClick);

const renderRandomPhotos = (arr, amount) => {
  const shuffledArr = shuffle(arr).slice(0, amount);
  renderPhotos(shuffledArr);
};

export { clearElements, renderRandomPhotos };
