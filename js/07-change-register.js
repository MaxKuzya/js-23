/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = "Hello world, it's my SCRIPT!";

// const upperCaseLetters = "ABCD-----Z"
// const isUpperCase = upperCaseLetters.includes(char);

// Варианты решения:
// 1: "Z" > string[i]
// 2: string[i] === string[i].toLowerCase()
// 3: includes выше

// 1 Создать аккумулятор
let acc = '';

// 2 Перебрать строку посимвольно
for (const char of string) {
  // 3 Сравнить текущий символ с собой же только .toLowerCase()
  const isLowerCase = char === char.toLowerCase();

  if (isLowerCase) {
    // 4 Если true - делаем его UPPER CASE
    acc += char.toUpperCase();
  } else {
    // 5 Если false - делаем его lower case
    acc += char.toLowerCase();
  }
}

// 6 Выводим
console.log(acc);
