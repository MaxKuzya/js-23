/**
 * Анонимные обьекты / функции
 */

const fn = /* Анонимная функция */ function () {
  // Fn Body
};

const obj = {
  a: 123,
  b: 42,
};

/**
 * Как скопировать массив
 *
 * 1. Spread (...)
 * 2. Array.prototype.slice()
 * 3. Array.prototype.concat()
 * 4. Array.from();
 */

const sourceArr = [12, 22, 55, 90, -40];

const way1 = [...sourceArr];
const way2 = sourceArr.slice();
const way3_1 = sourceArr.concat([]);
const way3_2 = [].concat(sourceArr);
const way4 = Array.from(sourceArr);

/**
 * Отсеять неуникальные значения
 *
 * 1-й вариант задачи:
 * 1. Обьединить все массивы
 *  - Array.prototype.concat()
 *  - Деструктуризация с помощью spread (...)
 *
 * 2. Отсортировать
 * 3. Убрать неуникальные значения (дубликаты)
 *
 *
 * 2-й вариант задачи:
 * 1. Обьединить все массивы
 * 2. Убрать неуникальные значения (совсем)
 *  - Если есть неуникальные значение - убрираем их полностью (совсем-совсем)
 */

const arrayA = [1, 2, 3, 12, 55];
const arrayB = [3, 4, 5, 55, 12];
const arrayC = [3, 55, 10, 11];

const additionalElement = 777;

// Array.prototype.concat()
const concat = arrayA.concat(
  additionalElement,
  arrayB,
  arrayC,
  additionalElement,
);

// spread (...)
const spread = [
  ...arrayA,
  additionalElement,
  ...arrayB,
  ...arrayC,
  additionalElement,
];

// 2. Сортируем
const sortedNumbers = concat.sort((a, b) => a - b);

// 3. Убираем неуникальные
// Читать: Map, Set, WeakMap, WeakSet
const onlyUnique = [...new Set(sortedNumbers)];

// console.log('concat', concat);
// console.log('onlyUnique', onlyUnique);

// console.log('spread', spread);

/**
 * ES6 / ES2015
 * Set (Набор)
 */

const mySet = new Set(sortedNumbers);

// console.log('Set:', mySet);

/**
 * Array.prototype.reverse()
 */

const str = 'Hello world!';

console.log(
  str
    .split('') // Array
    .reverse() // Array
    .join(''), // String
);

/**
 * Array.prototype.flat()
 */

const nestedArray = [1, 2, [3, 4, [5, [6]]]];

console.log(nestedArray);
console.log(nestedArray.flat(3));

/**
 * Array.prototype.flatMap() === [].flat(1).map();
 */

/**
 * Array.prototype.fill()
 */

console.log(new Array(1000).fill('Вас хакнули!'));
