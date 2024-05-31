// Два варианта функции проверки Палиндрома

// function isPalindrome (string) {
//   const formattedString = string.toLowerCase().replaceAll(' ', '');
//   const reversedString = function () {
//    const reverse = formattedString .split('').reverse().join('');
//    return reverse
//   }
//   for (let i = 0; i < formattedString.length; i++) {
//     if (formattedString.at(i) !== reversedString().at(i)) {
//       return false
//       }
//     }
//     return true
//  }

function isPalindrome (string) {
 const formattedString = string.toLowerCase().replaceAll(' ', '');
 const reversedString = function () {
  const reverse = formattedString .split('').reverse().join('');
  return reverse
 }
 return formattedString === reversedString();
}

console.log(isPalindrome('Лёша на полке клопа нашёл '))

