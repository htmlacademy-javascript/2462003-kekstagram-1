import { getRandomInteger, getRandomArrayElement } from './util.js';

const AMOUNT_OF_COPIES = 25;

const AMOUNT_OF_COMMENTS = 15;

const DESCRIPTIONS = [
  'Котенок играет с клубком ниток',
  'Радужный водопад в горах Китая',
  'Парящий воздушный шар над полями',
  'Прибрежные волны на закате',
  'Сморчок гриба в лесу осенью',
  'Девушка с букетом цветов на улице',
  'Заснеженная горная вершина на рассвете',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артем',
  'Виталий',
  'Анастасия',
  'Ксения',
  'Владимир',
  'Сергей',
];

const Avatar = {
  MIN: 1,
  MAX: 6
};

const Likes = {
  MIN: 15,
  MAX: 200
};

const getComment = () => ({
  id: getRandomInteger(1, 2000),
  avatar: getRandomInteger(Avatar.MIN, Avatar.MAX),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const getComments = () => Array.from({length: AMOUNT_OF_COMMENTS}, getComment);

const getPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: getComments()
});

const getPhotos = () => Array.from({length: AMOUNT_OF_COPIES}, (v, id) => getPhoto(id + 1));
getPhotos();
