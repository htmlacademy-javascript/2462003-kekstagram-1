const AMOUNT_OF_COPIES = 25;

const descriptions = [
  'Котенок играет с клубком ниток',
  'Радужный водопад в горах Китая',
  'Парящий воздушный шар над полями',
  'Прибрежные волны на закате',
  'Сморчок гриба в лесу осенью',
  'Девушка с букетом цветов на улице',
  'Заснеженная горная вершина на рассвете',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Артем',
  'Виталий',
  'Анастасия',
  'Ксения',
  'Владимир',
  'Сергей',
];

// Случайное число в диапозоне
const getRandomInteger = (a,b) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.trunc(Math.random() * (upper - lower + 1) + lower);
  return result;
};

const getRandomArrayElement = (elements) => elements[
  getRandomInteger(0, elements.length - 1)
];

const getComment = () => ({
  id: getRandomInteger(1,2000),
  avatar: getRandomInteger(1,6),
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names)
});


const getPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(15,200),
  comments: getComment()
});

const getPhotos = Array.from({length: AMOUNT_OF_COPIES}, (v,index) => getPhoto(index + 1));
