import { getPhotos } from './data.js';
import { renderPhotos } from './photos.js';

const picturesArray = getPhotos();

renderPhotos(picturesArray);
