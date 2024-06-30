import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';
import './full-photo.js';

const photos = getPhotos();

renderPhotos(photos);

export {photos};
