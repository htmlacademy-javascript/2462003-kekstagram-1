import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';
import { addGalleryListener } from './gallery.js';
import './open-form.js';
import './validate-form.js';
import { initScale } from './scale.js';
import './effect.js';

const photos = getPhotos();

renderPhotos(photos);
addGalleryListener(photos);
initScale();
