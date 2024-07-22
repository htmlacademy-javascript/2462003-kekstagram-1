import { renderPhotos } from './photos.js';
import { addGalleryListener } from './gallery.js';
import { setUserFormSubmit, closePreview } from './open-form.js';
import { initScale } from './scale.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { initFilters } from './filters.js';


initScale();

getData()
  .then((data) => {
    renderPhotos(data);
    addGalleryListener(data);
    initFilters(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closePreview);
