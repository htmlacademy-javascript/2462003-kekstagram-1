import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';
import { addGalleryListener } from './gallery.js';
import './open-form.js';
import './validate-form.js';

const photos = getPhotos();

renderPhotos(photos);
addGalleryListener(photos);
