function checkLengthString(str, length) {
  return str.length <= length;
}

function checkPalindrome(str) {
  const newStr = str.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i <= newStr.length; i++) {
    if (newStr[i] !== newStr.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

function extractNumbers(str) {
  let newStr = '';
  for (const letter of str) {
    if (!Number.isNaN(parseInt(letter, 10))) {
      newStr += letter;
    }
  }
  return +newStr !== 0 ? +newStr : NaN;
}

// проверки

checkLengthString('проверяемая строка', 20);
checkLengthString('проверяемая строка', 18);
checkLengthString('проверяемая строка', 20);

checkPalindrome('Лёша на полке клопа нашёл ');
checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');


extractNumbers('2023 год');
extractNumbers('ECMAScript 2022');
extractNumbers('1 кефир, 0.5 батона');
extractNumbers('агент 007');
extractNumbers('а я томат');
extractNumbers('2023');
extractNumbers('-1');
extractNumbers('1.5');
extractNumbers('');
