/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// 1 Обьявить переменную суммы
let total = 0;

// // 2 Перебрать элементы массива
// for (let i = 0; i < numbers.length; i += 1) {
//   // 3 Определить чётные числа
//   if (numbers[i] % 2 === 0) {
//     // 4 Добавить чётное число к сумме
//     total += numbers[i];
//   }
// }

// 2 Перебрать элементы массива
for (const number of numbers) {
  // 3 Определить чётные числа
  if (number % 2 === 0) {
    // 4 Добавить чётное число к сумме
    total += number;
  }
}

// 5 Вывести сумму
console.log(total);
