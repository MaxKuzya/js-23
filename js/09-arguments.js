/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function (a, b) {
//   console.log(a, b);
//   console.log(arguments);

//   console.log(Array.from(arguments));
// };

// const fn = function (a, b) {
//   console.log(a, b);
//   console.log(arguments);

//   console.log(Array.from(arguments));
// };

const fn = function (list, target, position, ...args) {
  console.log('list', list);
  console.log('target', target);
  console.log('position', position);
  console.log(args);
  console.log('');
};

// fn(1, 2, 3, true, '545', 6);
// fn(12, 'qweq');
// fn(24, 64, 3, 4, 5, 6, 7, 8, 9);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

const filterNumbers = function (array1, ...array2) {
  console.log('1:', array1);
  console.log('2:', array2);
  console.log('');
  let resultingArray = [];

  for (const el of array1) {
    if (array2.includes(el)) {
      resultingArray.push(el);
    }
  }

  return resultingArray;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
