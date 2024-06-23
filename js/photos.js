const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const renderPhotos = (array) => {
  const fragment = document.createDocumentFragment();
  array.forEach(({url, likes, comments, description}) => {
    const picture = pictureTemplate.cloneNode(true);
    const pictureImage = picture.querySelector('.picture__img');
    const pictureLikes = picture.querySelector('.picture__likes');
    const pictureComments = picture.querySelector('.picture__comments');

    pictureImage.src = url;
    pictureImage.alt = description;
    pictureLikes.textContent = likes;
    pictureComments.textContent = comments.length;

    fragment.appendChild(picture);
  });
  picturesList.appendChild(fragment);
};

export {renderPhotos};
