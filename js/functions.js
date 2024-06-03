const isPalindrome = (string) => {
  const formattedString = string
    .toLowerCase()
    .replaceAll(' ', '');
  const reversedString = formattedString
    .split('')
    .reverse()
    .join('');
  return formattedString === reversedString;
};

isPalindrome('Лёша на полке клопа нашёл ');

const getNumber = (i) => {
  const string = String(i);
  const filter = string.match(/[0-9]/gi);
  if (filter === null) {
    return NaN;
  }
  const result = +filter.join('');
  return result;
};

getNumber('1.5');

// const addSymbol = (initial, length, add) => {
//   if (length - initial.length - add.length > 0) {
//     const newString = initial.padStart(length - 1, add);
//     const cutString = add.slice(0, - add.length + 1);
//     const wholeString = cutString + newString;
//     return wholeString;
//   }
//   const addString = initial.padStart(length, add);
//   return addString;
// };

// Мой собственный вариант

// const addSymbol = (initial, length, add) => {
//   const cutStringLength = (length - initial.length) % add.length;
//   if (cutStringLength > 0) {
//     const newString = initial.padStart(length - cutStringLength, add);
//     const cutString = add.slice(0, cutStringLength);
//     return cutString + newString;
//   }
//   return initial.padStart(length, add);
// };

// Вариант без padStart

// const addSymbol = (initial, length, add) => {
//   const cutStringLength = length - initial.length; // длинна добавляемой строки с учетом длины аргумента
//   if (cutStringLength <= 0) { // если длинна добавляемой строки получилась меньше или равна нулю > возвращаем сам аргумент
//     return initial;
//   }
//   const tempAdd = add.slice(0, cutStringLength % add.length); // в противном случае находим обрезок добавляемой строки
//   const repeatAdd = add.repeat(cutStringLength / add.length) + initial; // повторяем нужное количество add и делаем конкатенацию с изначальным аргументом
//   return tempAdd + repeatAdd; // конкатенация обрезка и повторений
// };

// Ваиант на цикле

const addSymbol = (initial, length, add) => {
  let result = initial; // берем аргумент
  while (result.length < length) { // пока его длинна меньше длинны второго аргумента
    const newLength = result.length + add.length; // прибавляем к длинне изначвального текста длинну добивки
    const actualAdd = newLength <= length ? add : // и если новая длинна получилась меньше или равной длинне второго аргумента прибивка не будет обрезаться
      add.slice(0, length - newLength); // если же новая длинна больше длины второго аргумента, обрезаем добивку, чтобы всё уместилось в length
    result = actualAdd + result; // результат конкатенируем с изначальным текстом
  }
  return result;
};

addSymbol('Конь', 14,'Мой');

const checkLength = (text, length) => {
  const string = String(text);
  return string.length <= length;
};

checkLength('Проверка длинны строк', 10);
