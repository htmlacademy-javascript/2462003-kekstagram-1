import { getData } from './api.js';
import { renderPhotos } from './photos.js';
import { addGalleryListener } from './gallery.js';
import { showAlert } from './util.js';
import { activateFilters } from './filters.js';

const initData = () => {
  getData()
    .then((data) => {
      renderPhotos(data);
      addGalleryListener(data);
      activateFilters();
    })
    .catch(
      (err) => {
        showAlert(err.message);
      }
    );
};

export {initData};
