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
//   if (length - initial.length - add.length === 1) {
//     const newString = initial.padStart(length - initial.length, add);
//     const cutString = add.slice(0, length - add.length - 1);
//     const wholeString = cutString + newString;
//     return wholeString;
//   }
//   const addString = initial.padStart(length, add);
//   return addString;
// };

const addSymbol = (initial, length, add) => {
  if (length - initial.length - add.length > 0) {
    const newString = initial.padStart(length - 1, add);
    const cutString = add.slice(0, - add.length + 1);
    const wholeString = cutString + newString;
    return wholeString;
  }
  const addString = initial.padStart(length, add);
  return addString;
};

addSymbol('q', 4,'we');

const checkLength = (text, length) => {
  const string = String(text);
  return string.length <= length;
};
console.log(checkLength('fadsadass',10))
checkLength('Проверка длинны строк', 10);
