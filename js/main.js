import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';
import './fullphoto.js';

const photos = getPhotos();

renderPhotos(photos);

export {photos};
