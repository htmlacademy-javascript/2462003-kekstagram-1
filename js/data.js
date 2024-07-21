import { getData } from './api.js';
import { renderPhotos } from './photos.js';
import { addGalleryListener } from './gallery.js';
import { showAlert} from './util.js';
import { activateFilters, clearElements, renderRandomPhotos } from './filters.js';

const AMOUNT_OF_RANDOM_PICTURES = 10;

const pictures = [];

const initData = () => {
  getData()
    .then((data) => {
      renderPhotos(data);
      addGalleryListener(data);
      activateFilters();
      data.forEach((element) => {
        pictures.push(element);
      });
    })
    .catch(
      (err) => {
        showAlert(err.message);
      }
    );
};
console.log(pictures)
// clearElements();
renderRandomPhotos(pictures, AMOUNT_OF_RANDOM_PICTURES)
export {initData};
