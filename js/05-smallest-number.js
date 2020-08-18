/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 7, 13, 24, 7, 85, 19];

// 1 Задать начальное значение
let minNumber = numbers[0];

// 2 Перебрать массив
for (const number of numbers) {
  // 3 Сравнить текущий элемент с minNumber
  const isLess = number < minNumber;

  // 4 ЕСЛИ меньше - перезаписываем minNumber найденым элементом
  if (isLess) {
    minNumber = number;
  }
}

// 5 Выводим minNumber
console.log(minNumber);
