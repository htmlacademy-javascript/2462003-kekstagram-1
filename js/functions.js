// Два варианта функции проверки Палиндрома

// function isPalindrome (string) {
//   const formattedString = string
//     .toLowerCase()
//     .replaceAll(' ', '');
//   const reversedString = formattedString
//     .split('')
//     .reverse()
//     .join('');
//   for (let i = 0; i < formattedString.length; i++) {
//     if (formattedString.at(i) !== reversedString.at(i)) {
//       return false
//       }
//     }
//     return true
//  }

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

// console.log(isPalindrome('Лёша на полке клопа нашёл '))


function getNumber (string) {
  const number = Math.abs(string);
  if (!isNaN(number)) {
    return number;
  }
  const filter = string.match(/[0-9]/gi);
  if (filter === null) {
    return NaN;
  } const result = +filter.join('');
  return result;


}
console.log(getNumber('wqe21'))

