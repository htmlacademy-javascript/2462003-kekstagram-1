const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить фотографии',
  SEND_DATA: 'Не удалось отправить форму, попробуйте ещё раз',
};

const getData = () => fetch(`${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    } return response.json();
  })
  .catch(() => {
    throw new Error(ErrorText.GET_DATA);
  });

const sendData = () => {};

export {getData, sendData};
