import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';
import { addPicturesListener } from './gallery.js';

const photos = getPhotos();

renderPhotos(photos);
addPicturesListener(photos);
