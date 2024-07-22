const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosList = document.querySelector('.pictures');

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach(({id, url, likes, comments, description}) => {
    const picture = photoTemplate.cloneNode(true);
    const pictureImage = picture.querySelector('.picture__img');
    const pictureLikes = picture.querySelector('.picture__likes');
    const pictureComments = picture.querySelector('.picture__comments');

    picture.dataset.id = id;
    pictureImage.src = url;
    pictureImage.alt = description;
    pictureLikes.textContent = likes;
    pictureComments.textContent = comments.length;

    fragment.appendChild(picture);
  });
  photosList.appendChild(fragment);
};

const removePhotos = () => {
  const elements = document.querySelectorAll('.picture');
  elements.forEach((element) => element.remove());
};

export {renderPhotos, removePhotos};
