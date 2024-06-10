//Создать массив из 25 сгенерированных объектов
//obj {
//   id: число от 1 до 25 не повторяется
//   irl:  photos/{{i}}.jpg где i число от 1 до 25
//   description: придумай сам
//   like: число от 15 до 200
//   comments: массив объектов - список комментариев
// }

// пример объекта с комментариями
// obj {
//   id: любое число, id не должен повторяться
//   avatar: Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
//   message: 'В целом всё неплохо. Но не всё.'
//   name: 'Артём'
// }
// Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.

//генератор случайных чисел в диапозоне
//объект фотки
//объект комментария
//массив фоток

const descriptions = [
  'Котенок играет с клубком ниток',
  'Радужный водопад в горах Китая',
  'Парящий воздушный шар над полями',
  'Прибрежные волны на закате',
  'Сморчок гриба в лесу осенью',
  'Девушка с букетом цветов на улице',
  'Заснеженная горная вершина на рассвете',
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

const randomId = getRandomInteger(1,25);
const randomLikes = getRandomInteger(15,200);

console.log(randomCommentId)
const getPhoto = () => ({
  id: randomId,
  url: `photos/${randomId}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: randomLikes,
  comments: 'asd'
});

const getComment = () => ({
  id: randomLikes,
})

console.log(getPhoto());

// const  indexArray = () => {
//   let indexes = []
//   for (let i = 0; i <= 25; i++) {
//     if (indexes.values) {
//       getRandomInteger(1,25);
//     }
//     indexes += getRandomInteger(1,25) + ' '

//   }console.log(indexes)
//   return indexes
// }
// indexArray()
