const filters = document.querySelector('.img-filters');

const activateFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

export {activateFilters};
