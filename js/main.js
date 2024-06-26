import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';
import './fullphoto.js';
import './linkphotos.js';

const photos = getPhotos();

renderPhotos(photos);

