import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';

const photos = getPhotos();

renderPhotos(photos);
