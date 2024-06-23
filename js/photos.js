const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();

const renderPhotos = (array) => {
  array.forEach(({url, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    const pictureLikes = picture.querySelector('.picture__likes');
    const pictureComments = picture.querySelector('.picture__comments');
    pictureLikes.textContent = likes;
    pictureComments.textContent = comments.length;
    picturesFragment.appendChild(picture);
  });
  picturesList.appendChild(picturesFragment);
};

export {renderPhotos};
