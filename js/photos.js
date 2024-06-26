const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach(({id, url, likes, comments, description}) => {
    const picture = pictureTemplate.cloneNode(true);
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
  picturesList.appendChild(fragment);
};

export {renderPhotos};
