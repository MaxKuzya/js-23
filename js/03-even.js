/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const calcTotalOfEven = function (numbersArray) {
  // 1 Обьявить переменную суммы
  let total = 0;
  // Видны здесь: numbersArray, total

  // 2 Перебрать элементы массива
  for (const number of numbersArray) {
    // Видны здесь: numbersArray, total, number

    // 3 Определить чётные числа
    if (number % 2 === 0) {
      // 4 Добавить чётное число к сумме
      total += number;
    }
  }

  // 5 Вернуть сумму
  return total;
};

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

console.log(calcTotalOfEven(numbers));
console.log(calcTotalOfEven([1, 2, 4, 8]));
