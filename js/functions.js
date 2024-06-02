function isPalindrome (string) {
  const formattedString = string
    .toLowerCase()
    .replaceAll(' ', '');
  const reversedString = formattedString
    .split('')
    .reverse()
    .join('');
  return formattedString === reversedString;
}

isPalindrome('Лёша на полке клопа нашёл ');

function getNumber (i) {
  const string = String(i);
  const filter = string.match(/[0-9]/gi);
  if (filter === null) {
    return NaN;
  } const result = +filter.join('');
  return result;
}

getNumber('1.5');

function addSymbol(initial, length, add) {
  if (length - initial.length - add.length === 1) {
    const newString = initial.padStart(length - initial.length, add);
    const cutString = add.slice(0, length - add.length - 1);
    const wholeString = cutString + newString;
    return wholeString;
  } {
    const newString = initial.padStart(length, add);
    return newString;
  }
}

addSymbol('q', 4,'we');

function checkLength (text, length) {
  const string = String(text);
  if (string.length <= length) {
    return true;
  } return false;
}
checkLength('Проверка длинны строк', 10);
