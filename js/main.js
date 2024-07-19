// import { renderPhotos } from './photos.js';
// import { addGalleryListener } from './gallery.js';
import { setUserFormSubmit, closePreview } from './open-form.js';
import { initScale } from './scale.js';
// import { getData } from './api.js';
// import { showAlert } from './util.js';
import './filters.js';
import { initData } from './data.js';

initScale();

initData();

setUserFormSubmit(closePreview);
