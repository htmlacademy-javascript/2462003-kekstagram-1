import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';
import { addGalleryListener } from './gallery.js';
import './form.js';

const photos = getPhotos();

renderPhotos(photos);
addGalleryListener(photos);
