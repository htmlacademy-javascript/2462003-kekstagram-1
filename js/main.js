// import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';
import { addGalleryListener } from './gallery.js';
import './open-form.js';
import './validate-form.js';
import { initScale } from './scale.js';
import './effect.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
// const photos = getPhotos();

initScale();

getData()
  .then((data) => {
    renderPhotos(data);
    addGalleryListener(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
